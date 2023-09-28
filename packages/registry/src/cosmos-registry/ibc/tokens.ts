import { toIBCDenom } from "@nancy/core";
import {
  loadAssets,
  loadChains,
  loadTestnetAssets,
  loadTestnetChains,
} from "../loaders/load-chains.js";
import { makeChannel } from "./makeChannels.js";
import { groupBy } from "lodash-es";

const assets = [
  ...(await loadAssets()),
  ...(await loadTestnetAssets()),
];
const chains = [
  ...(await loadChains()),
  ...(await loadTestnetChains()),
];
const chainMap = new Map(
  await Promise.all(
    chains.map(
      async (chain) =>
        [
          chain.chain_name,
          await makeChannel(
            chain,
          ),
        ] as const,
    ),
  ),
);

const ibcMap = assets.flatMap(
  ({
    chain_name,
    assets,
  }) => {
    const channels =
      chainMap.get(
        chain_name,
      );
    if (!channels) return [];
    console.log(
      chain_name,
      Object.entries(channels)
        .length *
        assets.filter(
          ({
            type_asset = "sdk.coin",
          }) =>
            type_asset ===
            "sdk.coin",
        ).length,
    );
    return assets.flatMap(
      ({
        type_asset = "sdk.coin",
        denom_units,
        display,
        base,
        symbol,
      }) => {
        if (
          type_asset !==
          "sdk.coin"
        )
          return [];
        const displayDenom =
          denom_units.find(
            ({ denom }) =>
              denom ===
              display,
          );
        return Object.entries(
          channels,
        ).map(
          ([
            chain,
            {
              counterpartyChannelId,
              portId,
            },
          ]) => {
            return {
              destination:
                chain,
              ibcHash:
                toIBCDenom(
                  portId,
                  counterpartyChannelId,
                  base,
                ).slice(
                  4,
                  4 + 7,
                ),
              source:
                chain_name,
              symbol,
              base,
              decimals:
                displayDenom?.exponent,
            };
          },
        );
      },
    );
  },
);

const json = JSON.stringify(
  groupBy(
    ibcMap,
    ({ destination }) =>
      destination,
  ),
);
const uncompressed =
  Buffer.from(json);

const compressed =
  Bun.gzipSync(uncompressed);

const formatKb = (
  bytes: number,
) =>
  `${
    Math.round(
      (bytes / 1024) * 100,
    ) / 100
  }kb`;
console.log(
  // json,
  formatKb(
    uncompressed.byteLength,
  ),
  formatKb(
    compressed.byteLength,
  ),
  compressed.byteLength /
    uncompressed.byteLength,

  ibcMap.length,
  new Set(ibcMap).size,
);

await Bun.write(
  "gen/ibc.json",
  json,
);

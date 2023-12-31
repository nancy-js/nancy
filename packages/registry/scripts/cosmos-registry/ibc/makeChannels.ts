import { memoize } from "lodash-es";
import {
  loadIBCData,
  loadTestnetIBCData,
} from "../loaders/load-chains.js";
import { IBCData } from "../types/ibc-data.js";
import { CosmosChain } from "../types/chain.js";

const withValue = <T>(
  arr: T[] | undefined,
  value: T,
) => [...(arr ?? []), value];

const getIBCDataGroupedByNetwork =
  memoize(async () => {
    return [
      ...(await loadIBCData()),
      ...(await loadTestnetIBCData()),
    ].reduce<
      Record<
        string,
        IBCData[]
      >
    >((acc, current) => {
      const {
        chain_1,
        chain_2,
      } = current;

      acc[
        chain_1.chain_name
      ] = withValue(
        acc[
          chain_1.chain_name
        ],
        current,
      );

      acc[
        chain_2.chain_name
      ] = withValue(
        acc[
          chain_2.chain_name
        ],
        current,
      );

      return acc;
    }, {});
  });

const sortChannel = (
  data: IBCData,
  chainName: string,
) => {
  const {
    chain_1,
    chain_2,
    channels,
  } = data;

  const out = [
    {
      ...chain_1,
      ...channels[0],
      ...channels[0].chain_1,
    },
    {
      ...chain_2,
      ...channels[0],
      ...channels[0].chain_2,
    },
  ];
  if (
    chain_1.chain_name !==
    chainName
  ) {
    return out.reverse();
  }
  return out;
};

export const makeChannel =
  memoize(
    async (
      chain: CosmosChain,
    ) => {
      const channels = (
        await getIBCDataGroupedByNetwork()
      )[chain.chain_name];

      if (
        !channels ||
        !channels.length
      ) {
        return;
      }
      return Object.fromEntries(
        channels.map(
          (data) => {
            const [
              source,
              destination,
            ] = sortChannel(
              data,
              chain.chain_name,
            );
            source.version;

            return [
              destination.chain_name,
              {
                portId:
                  source.port_id,
                channelId:
                  source.channel_id,
                counterpartyChainId:
                  destination.chain_name,
                counterpartyPortId:
                  destination.port_id,
                counterpartyChannelId:
                  destination.channel_id,
                order:
                  source.ordering,
                version:
                  source.version,
              },
            ];
          },
        ),
      );
    },
  );

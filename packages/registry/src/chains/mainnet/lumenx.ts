/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "lumenx",
  displayName: "LumenX",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg",
  },
  repository:
    "https://github.com/cryptonetD/lumenx",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/lumenx",
        "https://rpc-lumenx.cryptonet.pl/",
        "https://lumenx-rpc.kynraze.com/",
        "https://rpc-lumenx.comunitynode.my.id",
        "https://rpc.lumenx.hexnodes.co",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/lumenx",
        "https://api-lumenx.cryptonet.pl/",
        "https://lumenx-api.kynraze.com",
        "https://api-lumenx.comunitynode.my.id",
        "https://api-lumenx.nodine.id/",
        "https://lcd.lumenx.hexnodes.co/",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-286",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

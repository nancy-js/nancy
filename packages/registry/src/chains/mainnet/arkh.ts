/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "arkh",
  displayName: "Arkhadian",
  website:
    "https://arkhadian.com/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg",
  },
  repository:
    "https://github.com/vincadian/arkh-blockchain",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/arkh",
        "https://asc-dataseed.arkhadian.com/",
        "https://rpc.arkh.nodestake.top",
        "https://rpc-arkhadian.comunitynode.my.id",
        "https://arkh-rpc.kynraze.com",
        "https://rpc.arkh.nodexcapital.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/arkh",
        "https://asc-blockchain-api.arkhadian.com/",
        "https://api.arkh.nodestake.top",
        "https://api-arkhadian.comunitynode.my.id",
        "https://arkh-api.kynraze.com",
        "https://rest.arkh.nodexcapital.com",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-648",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

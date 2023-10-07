/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "konstellation",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/konstellation",
        "https://node1.konstellation.tech:26657",
        "https://konstellation-rpc.polkachu.com",
        "https://rpc-konstellation-ia.cosmosia.notional.ventures/",
        "https://konstellation-mainnet-rpc.autostake.com:443",
        "https://konstellation-rpc.stakerhouse.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/konstellation",
        "https://node1.konstellation.tech:1318",
        "https://api-konstellation-ia.cosmosia.notional.ventures/",
        "https://konstellation-api.polkachu.com",
        "https://api-konstellation.starsquid.io",
        "https://konstellation-mainnet-lcd.autostake.com:443",
        "https://konstellation-rest.stakerhouse.com",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-171",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

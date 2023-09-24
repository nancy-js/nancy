/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "comdex",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.comdex.one",
        "https://comdex-rpc.polkachu.com",
        "https://rpc.comdex.chaintools.tech/",
        "https://comdex-rpc.lavenderfive.com/",
        "https://rpc-comdex.cosmos-spaces.cloud",
        "https://rpc-comdex.goldenratiostaking.net",
        "https://rpc-comdex.whispernode.com:443",
        "https://rpc-comdex.carbonZERO.zone:443",
        "https://comdex-mainnet-rpc.autostake.com:443",
        "https://comdex-rpc.w3coins.io",
        "https://comdex-rpc.stakerhouse.com",
        "https://comdex-rpc.publicnode.com",
        "https://rpc-comdex-01.stakeflow.io",
        "https://comdex-rpc.validatornode.com",
      ],
    },
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-87",
        order: "unordered",
        version: "ics20-1",
      },
      bandchain: {
        portId:
          "bandoracleV1",
        channelId:
          "channel-43",
        counterpartyChainId:
          "bandchain",
        counterpartyPortId:
          "oracle",
        counterpartyChannelId:
          "channel-96",
        order: "unordered",
        version:
          "bandchain-1",
      },
      migaloo: {
        portId: "transfer",
        channelId:
          "channel-63",
        counterpartyChainId:
          "migaloo",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-12",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-18",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-36",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-49",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-26",
        order: "unordered",
        version: "ics20-1",
      },
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-65",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-63",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-57",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-71",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-45",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-49",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
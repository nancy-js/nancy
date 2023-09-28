/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "coreum",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://full-node.mainnet-1.coreum.dev:26657",
        "https://full-node-californium.mainnet-1.coreum.dev:26657",
        "https://full-node-curium.mainnet-1.coreum.dev:26657",
        "https://full-node-uranium.mainnet-1.coreum.dev:26657",
        "https://rpc-coreum.ecostake.com",
        "https://rpc.coreum.nodexcapital.com",
        "https://coreum.rpc.silknodes.io",
        "https://coreum-rpc.publicnode.com",
      ],
    },
  },
  ibc: {
    channels: {
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-660",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2188",
        order: "unordered",
        version: "ics20-1",
      },
      gravitybridge: {
        portId: "transfer",
        channelId:
          "channel-7",
        counterpartyChainId:
          "gravitybridge",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-142",
        order: "unordered",
        version: "ics20-1",
      },
      axelar: {
        portId: "transfer",
        channelId:
          "channel-6",
        counterpartyChainId:
          "axelar",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-120",
        order: "unordered",
        version: "ics20-1",
      },
      evmos: {
        portId: "transfer",
        channelId:
          "channel-8",
        counterpartyChainId:
          "evmos",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-87",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

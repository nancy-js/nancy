/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "lambda",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.lambda.im",
        "https://rpc-lambda.d-stake.xyz",
        "http://lambda.rpc.m.stavr.tech:31327",
        "https://rpc.lambda.nodestake.top",
      ],
    },
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-378",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "lambda",
  displayName: "Lambda",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg",
  },
  repository:
    "https://github.com/LambdaIM/lambdavm",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/lambda",
        "https://rpc.lambda.im",
        "https://rpc-lambda.d-stake.xyz",
        "http://lambda.rpc.m.stavr.tech:31327",
        "https://rpc.lambda.nodestake.top",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/lambda",
        "https://rest.lambda.im",
        "https://api-lambda.d-stake.xyz",
        "https://lambda.api.m.stavr.tech",
        "https://api.lambda.nodestake.top",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://jsonrpc-lambda.d-stake.xyz",
      ],
    },
  },
  ibc: {
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
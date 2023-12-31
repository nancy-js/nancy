/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "likecoin",
  displayName: "LikeCoin",
  website: "https://like.co/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg",
  },
  repository:
    "https://github.com/likecoin/likecoin-chain",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/likecoin",
        "https://mainnet-node.like.co/rpc/",
        "https://likecoin-node.oldcat.io:443/rpc/",
        "https://rpc-likecoin-mainnet.pikaser.net",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/likecoin",
        "https://mainnet-node.like.co",
        "https://likecoin-node.oldcat.io:443/api/",
        "https://rest-likecoin-mainnet.pikaser.net",
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
          "channel-53",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-5",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-217",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "point",
  displayName:
    "Point Network",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg",
  },
  repository:
    "https://github.com/pointnetwork/point-chain",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/point",
        "https://rpc-mainnet-1.point.space:26657",
        "https://rpc.point.nodestake.top",
        "https://rpc.point.nodexcapital.com",
        "https://rpc.point.indonode.net",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/point",
        "https://rpc-mainnet-1.point.space:1317",
        "https://api.point.nodestake.top",
        "https://rest.point.nodexcapital.com",
        "https://api.point.indonode.net",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://rpc-mainnet-1.point.space",
        "https://jsonrpc.point.nodestake.top",
      ],
    },
  },
  ibc: {
    channels: {
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-404",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

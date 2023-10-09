/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "uptick",
  displayName: "Uptick",
  website:
    "https://uptick.network/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg",
  },
  repository:
    "https://github.com/UptickNetwork/uptick",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/uptick",
        "https://uptick-rpc.brocha.in:443",
        "https://uptick.rpc.bccnodes.com:443",
        "https://rpc.uptick.nodestake.top",
        "https://uptick.rpc.kjnodes.com",
        "http://uptick.rpc.m.stavr.tech:3157",
        "https://m-uptick.rpc.utsa.tech",
        "https://uptick-mainnet-rpc.itrocket.net:443",
        "https://uptick.rpc.liveraven.net",
        "https://uptick-rpc.staketab.org:443",
        "https://uptick-rpc.stakerhouse.com",
        "https://rpc-uptick.mms.team",
        "https://rpc-uptick.cakralabs.site",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/uptick",
        "https://uptick-rest.brocha.in:443",
        "https://uptick.api.bccnodes.com:443",
        "https://api.uptick.nodestake.top",
        "https://uptick.api.kjnodes.com",
        "https://uptick.api.m.stavr.tech",
        "https://m-uptick.api.utsa.tech",
        "https://uptick-mainnet-api.itrocket.net:443",
        "https://uptick.api.liveraven.net",
        "https://uptick-rest.staketab.org",
        "https://uptick-rest.stakerhouse.com",
        "https://api-uptick.mms.team",
        "https://rest-uptick.cakralabs.site",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://jsonrpc.uptick.nodestake.top",
        "https://uptick.jsonrpc.liveraven.net",
      ],
    },
  },
  ibc: {
    channels: {
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-39",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-535",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
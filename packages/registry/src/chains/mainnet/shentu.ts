/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "shentu",
  displayName: "Shentu",
  website:
    "https://www.shentu.technology/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg",
  },
  repository:
    "https://github.com/ShentuChain/shentu",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/shentu",
        "https://shenturpc.noopsbycertik.com/",
        "https://certik-rpc.polkachu.com",
        "https://shentu-rpc.ramuchi.tech",
        "https://rpc-shentu-01.stakeflow.io",
        "https://shentu-rpc.tienthuattoan.ventures",
        "https://shentu-rpc.publicnode.com",
        "https://shentu-rpc.highstakes.ch:26657/",
        "https://shentu-rpc.panthea.eu",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/shentu",
        "https://rest.noopsbycertik.com/",
        "https://certik-api.polkachu.com",
        "https://shentu-api.ramuchi.tech",
        "https://api-shentu-01.stakeflow.io",
        "https://shentu-api.tienthuattoan.ventures",
        "https://shentu-rest.publicnode.com",
        "https://shentu-api.highstakes.ch:1317/",
        "https://shentu-api.panthea.eu",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-8",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-146",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "meme",
  displayName: "MEME",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg",
  },
  repository:
    "https://github.com/memecosmos/meme/",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/meme",
        "https://rpc-meme-1.meme.sx/",
        "https://meme-rpc.polkachu.com/",
        "https://rpc-meme.pupmos.network/",
        "https://meme-rpc.kleomedes.network",
        "https://meme.rpc.m.anode.team",
        "https://rpc.meme.stake-take.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/meme",
        "https://api-meme-1.meme.sx/",
        "https://meme-api.polkachu.com/",
        "https://api-meme.pupmos.network/",
        "https://meme-api.kleomedes.network",
        "https://meme.api.m.anode.team",
        "https://api.meme.stake-take.com",
      ],
    },
  },
  evm: null,
  ibc: {
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
          "channel-238",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

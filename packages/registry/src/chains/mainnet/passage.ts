/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "passage",
  displayName: "Passage",
  website:
    "https://passage3d.com/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png",
    svg: null,
  },
  repository:
    "https://github.com/envadiv/Passage3D",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/passage",
        "https://rpc.passage.vitwit.com",
        "https://passage-rpc.staketab.org:443",
        "https://rpc-passage.ecostake.com",
        "https://passage-rpc.lavenderfive.com:443",
        "https://rpc-passage-ia.cosmosia.notional.ventures/",
        "https://rpc-passage.cosmos-spaces.cloud",
        "https://rpc.passage.nodestake.top",
        "https://passage-rpc.polkachu.com",
        "https://passage-rpc.ibs.team/",
        "https://rpc-passage.d-stake.xyz",
        "https://rpc-passage.whispernode.com:443",
        "https://passage-mainnet-rpc.autostake.com:443",
        "https://passage-rpc.stakerhouse.com",
        "https://passage-rpc.publicnode.com:443",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/passage",
        "https://api.passage.vitwit.com",
        "https://passage-rest.staketab.org",
        "https://rest-passage.ecostake.com",
        "https://passage-api.lavenderfive.com:443",
        "https://api-passage.cosmos-spaces.cloud",
        "https://api-passage-ia.cosmosia.notional.ventures/",
        "https://api.passage.nodestake.top",
        "https://passage-api.polkachu.com",
        "https://passage-api.ibs.team/",
        "https://api-passage.d-stake.xyz",
        "https://passage-mainnet-lcd.autostake.com:443",
        "https://lcd-passage.whispernode.com:443",
        "https://passage-rest.stakerhouse.com",
        "https://passage-rest.publicnode.com",
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
          "channel-2494",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

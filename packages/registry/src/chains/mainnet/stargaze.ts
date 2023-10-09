/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "stargaze",
  displayName: "Stargaze",
  website:
    "https://stargaze.zone/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg",
  },
  repository:
    "https://github.com/public-awesome/stargaze",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/stargaze",
        "https://rpc.stargaze-apis.com/",
        "https://rpc-stargaze.pupmos.network",
        "https://rpc-stargaze.ezstaking.dev",
        "https://stargaze-rpc.polkachu.com",
        "https://rpc-stargaze-ia.cosmosia.notional.ventures/",
        "https://stargaze.c29r3.xyz:443/rpc/",
        "https://rpc-stargaze.cosmos-spaces.cloud",
        "https://stargaze-rpc.ibs.team",
        "https://rpc-stargaze.d-stake.xyz",
        "https://rpc.stargaze.silentvalidator.com/",
        "https://rpc-stargaze.whispernode.com:443",
        "https://stargaze-mainnet-rpc.autostake.com:443",
        "https://stargaze-rpc.ramuchi.tech",
        "https://stargaze-rpc.staketab.org:443",
        "https://stargaze-rpc.w3coins.io",
        "https://stargaze-rpc.stakerhouse.com",
        "https://stargaze-rpc.publicnode.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/stargaze",
        "https://rest.stargaze-apis.com/",
        "https://api-stargaze.pupmos.network",
        "https://api-stargaze.ezstaking.dev",
        "https://api-stargaze-ia.cosmosia.notional.ventures/",
        "https://stargaze.c29r3.xyz:443/api/",
        "https://stargaze-api.polkachu.com",
        "https://stargaze-api.ibs.team",
        "https://api-stargaze.d-stake.xyz",
        "https://api-stargaze.cosmos-spaces.cloud",
        "https://api.stargaze.silentvalidator.com/",
        "https://stargaze-mainnet-lcd.autostake.com:443",
        "https://lcd-stargaze.whispernode.com:443",
        "https://stargaze-api.ramuchi.tech",
        "https://stargaze-rest.staketab.org",
        "https://stargaze-api.w3coins.io",
        "https://stargaze-rest.stakerhouse.com",
        "https://stargaze-rest.publicnode.com",
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
          "channel-75",
        order: "unordered",
        version: "ics20-1",
      },
      acrechain: {
        portId: "transfer",
        channelId:
          "channel-121",
        counterpartyChainId:
          "acrechain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-4",
        order: "unordered",
        version: "ics20-1",
      },
      noble: {
        portId: "transfer",
        channelId:
          "channel-204",
        counterpartyChainId:
          "noble",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-11",
        order: "unordered",
        version: "ics20-1",
      },
      carbon: {
        portId: "transfer",
        channelId:
          "channel-123",
        counterpartyChainId:
          "carbon",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-15",
        order: "unordered",
        version: "ics20-1",
      },
      composable: {
        portId: "transfer",
        channelId:
          "channel-184",
        counterpartyChainId:
          "composable",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-6",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-51",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-21",
        order: "unordered",
        version: "ics20-1",
      },
      neutron: {
        portId: "transfer",
        channelId:
          "channel-191",
        counterpartyChainId:
          "neutron",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-18",
        order: "unordered",
        version: "ics20-1",
      },
      quicksilver: {
        portId: "transfer",
        channelId:
          "channel-124",
        counterpartyChainId:
          "quicksilver",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-0",
        order: "unordered",
        version: "ics20-1",
      },
      nois: {
        portId: "transfer",
        channelId:
          "channel-137",
        counterpartyChainId:
          "nois",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-0",
        order: "unordered",
        version: "ics20-1",
      },
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-48",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-19",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-106",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-19",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-5",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-20",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
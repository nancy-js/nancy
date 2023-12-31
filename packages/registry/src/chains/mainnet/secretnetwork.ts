/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "secretnetwork",
  displayName:
    "Secret Network",
  website:
    "https://scrt.network/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg",
  },
  repository:
    "https://github.com/scrtlabs/SecretNetwork",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/secretnetwork",
        "https://rpc.secret.express",
        "https://scrt.public-rpc.com",
        "https://secretnetwork-rpc.lavenderfive.com:443",
        "https://rpc-secret.whispernode.com:443",
        "https://secret-rpc.bharvest.io",
        "https://1rpc.io/scrt-rpc",
        "https://secretnetwork-rpc.highstakes.ch:26657/",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/secretnetwork",
        "https://lcd.secret.express",
        "https://secretnetwork-api.lavenderfive.com:443",
        "https://lcd-secret.whispernode.com:443",
        "http://secretnetwork-mainnet-lcd.autostake.com:1317",
        "https://secret-api.bharvest.io",
        "https://1rpc.io/scrt-lcd",
        "https://secretnetwork-api.highstakes.ch:1317/",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      axelar: {
        portId: "transfer",
        channelId:
          "channel-20",
        counterpartyChainId:
          "axelar",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-12",
        order: "unordered",
        version: "ics20-1",
      },
      akash: {
        portId: "transfer",
        channelId:
          "channel-21",
        counterpartyChainId:
          "akash",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-43",
        order: "unordered",
        version: "ics20-1",
      },
      gravitybridge: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "gravitybridge",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-79",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-88",
        order: "unordered",
        version: "ics20-1",
      },
      evmos: {
        portId: "transfer",
        channelId:
          "channel-18",
        counterpartyChainId:
          "evmos",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-15",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-235",
        order: "unordered",
        version: "ics20-1",
      },
      archway: {
        portId: "transfer",
        channelId:
          "channel-84",
        counterpartyChainId:
          "archway",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-21",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-64",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-82",
        order: "unordered",
        version: "ics20-1",
      },
      comdex: {
        portId: "transfer",
        channelId:
          "channel-63",
        counterpartyChainId:
          "comdex",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-65",
        order: "unordered",
        version: "ics20-1",
      },
      chihuahua: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "chihuahua",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-16",
        order: "unordered",
        version: "ics20-1",
      },
      terra: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "terra",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-16",
        order: "unordered",
        version: "ics20-1",
      },
      quicksilver: {
        portId: "transfer",
        channelId:
          "channel-65",
        counterpartyChainId:
          "quicksilver",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-52",
        order: "unordered",
        version: "ics20-1",
      },
      noble: {
        portId: "transfer",
        channelId:
          "channel-88",
        counterpartyChainId:
          "noble",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-17",
        order: "unordered",
        version: "ics20-1",
      },
      sifchain: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "sifchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-65",
        order: "unordered",
        version: "ics20-1",
      },
      terra2: {
        portId: "transfer",
        channelId:
          "channel-16",
        counterpartyChainId:
          "terra2",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-3",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-24",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-10",
        order: "unordered",
        version: "ics20-1",
      },
      migaloo: {
        portId: "transfer",
        channelId:
          "channel-57",
        counterpartyChainId:
          "migaloo",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-4",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-8",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-48",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-22",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-10",
        order: "unordered",
        version: "ics20-1",
      },
      composable: {
        portId: "transfer",
        channelId:
          "channel-80",
        counterpartyChainId:
          "composable",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-14",
        order: "unordered",
        version: "ics20-1",
      },
      injective: {
        portId: "transfer",
        channelId:
          "channel-23",
        counterpartyChainId:
          "injective",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-88",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-37",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-40",
        order: "unordered",
        version: "ics20-1",
      },
      sentinel: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "sentinel",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-50",
        order: "unordered",
        version: "ics20-1",
      },
      stargaze: {
        portId: "transfer",
        channelId:
          "channel-19",
        counterpartyChainId:
          "stargaze",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-48",
        order: "unordered",
        version: "ics20-1",
      },
      agoric: {
        portId: "transfer",
        channelId:
          "channel-51",
        counterpartyChainId:
          "agoric",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-10",
        order: "unordered",
        version: "ics20-1",
      },
      jackal: {
        portId: "transfer",
        channelId:
          "channel-62",
        counterpartyChainId:
          "jackal",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

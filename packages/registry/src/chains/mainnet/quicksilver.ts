/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "quicksilver",
  displayName: "Quicksilver",
  website:
    "https://quicksilver.zone/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg",
  },
  repository:
    "https://github.com/ingenuity-build/quicksilver",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/quicksilver",
        "https://rpc-quicksilver.takeshi.team:443",
        "https://rpc.quicksilver.zone:443",
        "https://rpc-quicksilver-ia.cosmosia.notional.ventures:443",
        "https://quicksilver-rpc.lavenderfive.com:443",
        "https://rpc-quicksilver.cosmos-spaces.cloud",
        "https://m-quicksilver.rpc.utsa.tech",
        "http://quick.rpc.m.stavr.tech:21027",
        "https://quicksilver-mainnet-rpc.autostake.com:443",
        "https://quicksilver-rpc.ibs.team:443",
        "https://quicksilver.rpc.kjnodes.com",
        "https://rpc-quicksilver.architectnodes.com",
        "https://quicksilver-rpc.punq.info",
        "https://archive-rpc-quicksilver.huginn.tech",
        "https://rpc-quicksilver.huginn.tech",
        "https://rpc.quicksilver.indonode.net",
        "https://quicksilver-rpc.staketab.org:443",
        "https://rpc.quicksilver.stake-take.com",
        "https://quicksilver-rpc.theamsolutions.info",
        "https://quicksilver-rpc.w3coins.io",
        "https://rpc-quicksilver.mms.team/",
        "https://quicksilver-rpc.publicnode.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/quicksilver",
        "https://api-quicksilver.takeshi.team:443",
        "https://api-quicksilver-ia.cosmosia.notional.ventures:443",
        "https://quicksilver-api.lavenderfive.com:443",
        "https://api-quicksilver.cosmos-spaces.cloud",
        "https://quicksilver-mainnet-lcd.autostake.com:443",
        "https://m-quicksilver.api.utsa.tech",
        "https://quick.api.m.stavr.tech",
        "https://quicksilver.api.kjnodes.com",
        "https://rest-quicksilver.architectnodes.com",
        "https://quicksilver-api.punq.info",
        "https://archive-lcd-quicksilver.huginn.tech",
        "https://api.quicksilver.huginn.tech",
        "https://api.quicksilver.indonode.net",
        "https://quicksilver-rest.staketab.org",
        "https://api.quicksilver.stake-take.com",
        "https://quicksilver-api.theamsolutions.info",
        "https://quicksilver-api.w3coins.io",
        "https://api-quicksilver.mms.team",
        "https://quicksilver-rest.publicnode.com",
      ],
    },
  },
  evm: null,
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
          "channel-522",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-16",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-73",
        order: "unordered",
        version: "ics20-1",
      },
      umee: {
        portId: "transfer",
        channelId:
          "channel-49",
        counterpartyChainId:
          "umee",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-53",
        order: "unordered",
        version: "ics20-1",
      },
      stargaze: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "stargaze",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-124",
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
          "channel-467",
        order: "unordered",
        version: "ics20-1",
      },
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-52",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-65",
        order: "unordered",
        version: "ics20-1",
      },
      composable: {
        portId: "transfer",
        channelId:
          "channel-94",
        counterpartyChainId:
          "composable",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      regen: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "regen",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-61",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-22",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-215",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
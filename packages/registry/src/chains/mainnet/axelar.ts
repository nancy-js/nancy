/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "axelar",
  displayName: "Axelar",
  website:
    "https://axelar.network/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.svg",
  },
  repository:
    "https://github.com/axelarnetwork/axelar-core",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/axelar",
        "https://rpc-axelar.imperator.co:443",
        "https://axelar-rpc.quickapi.com:443",
        "https://axelar-rpc.chainode.tech:443",
        "https://rpc-axelar.cosmos-spaces.cloud",
        "https://axelar-rpc.pops.one:443",
        "https://axelar-rpc.qubelabs.io:443",
        "https://rpc-1.axelar.nodes.guru:443",
        "https://rpc-axelar-ia.cosmosia.notional.ventures/",
        "https://axelar-rpc.polkachu.com",
        "https://axelar.rpc.stakin-nodes.com",
        "https://rpc.axelar.bh.rocks",
        "https://axelar-rpc.validatrium.club",
        "https://rpc-axelar.whispernode.com:443",
        "https://axelar-rpc.quantnode.tech/",
        "https://axelar-mainnet-rpc.autostake.com:443",
        "https://axelar-rpc.rockrpc.net/",
        "https://axelar-rpc.ibs.team",
        "https://rpc-axelar-01.stakeflow.io",
        "https://axelar-rpc.staketab.org:443",
        "https://rpc-axelar.carbonZERO.zone:443",
        "https://axelar-rpc.w3coins.io",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/axelar",
        "https://lcd-axelar.imperator.co:443",
        "https://axelar-lcd.quickapi.com:443",
        "https://axelar-rest.chainode.tech:443",
        "https://api-axelar.cosmos-spaces.cloud",
        "https://axelar-lcd.qubelabs.io:443",
        "https://api-1.axelar.nodes.guru:443",
        "https://api-axelar-ia.cosmosia.notional.ventures/",
        "https://axelar-api.polkachu.com",
        "https://axelar.rest.stakin-nodes.com",
        "https://api.axelar.bh.rocks",
        "https://axelar-api.validatrium.club",
        "https://lcd-axelar.whispernode.com:443",
        "https://axelar-mainnet-lcd.autostake.com:443",
        "https://axelar-lcd.quantnode.tech/",
        "https://axelar-api.ibs.team",
        "https://api-axelar-01.stakeflow.io",
        "https://axelar-rest.staketab.org",
        "https://rest-axelar.carbonZERO.zone:443",
        "https://axelar-api.w3coins.io",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-20",
        order: "unordered",
        version: "ics20-1",
      },
      odin: {
        portId: "transfer",
        channelId:
          "channel-102",
        counterpartyChainId:
          "odin",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-37",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-64",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-69",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-4",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-71",
        order: "unordered",
        version: "ics20-1",
      },
      impacthub: {
        portId: "transfer",
        channelId:
          "channel-114",
        counterpartyChainId:
          "impacthub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-23",
        order: "unordered",
        version: "ics20-1",
      },
      neutron: {
        portId: "transfer",
        channelId:
          "channel-78",
        counterpartyChainId:
          "neutron",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2",
        order: "unordered",
        version: "ics20-1",
      },
      agoric: {
        portId: "transfer",
        channelId:
          "channel-41",
        counterpartyChainId:
          "agoric",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      coreum: {
        portId: "transfer",
        channelId:
          "channel-120",
        counterpartyChainId:
          "coreum",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-6",
        order: "unordered",
        version: "ics20-1",
      },
      kyve: {
        portId: "transfer",
        channelId:
          "channel-75",
        counterpartyChainId:
          "kyve",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-1",
        order: "unordered",
        version: "ics20-1",
      },
      aura: {
        portId: "transfer",
        channelId:
          "channel-104",
        counterpartyChainId:
          "aura",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-4",
        order: "unordered",
        version: "ics20-1",
      },
      archway: {
        portId: "transfer",
        channelId:
          "channel-111",
        counterpartyChainId:
          "archway",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-13",
        order: "unordered",
        version: "ics20-1",
      },
      injective: {
        portId: "transfer",
        channelId:
          "channel-10",
        counterpartyChainId:
          "injective",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-84",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-7",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-4",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-208",
        order: "unordered",
        version: "ics20-1",
      },
      sommelier: {
        portId: "transfer",
        channelId:
          "channel-72",
        counterpartyChainId:
          "sommelier",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-5",
        order: "unordered",
        version: "ics-20",
      },
      empowerchain: {
        portId: "transfer",
        channelId:
          "channel-109",
        counterpartyChainId:
          "empowerchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-14",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      acrechain: {
        portId: "transfer",
        channelId:
          "channel-51",
        counterpartyChainId:
          "acrechain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-5",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

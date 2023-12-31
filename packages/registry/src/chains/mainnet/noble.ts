/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "noble",
  displayName: "Noble",
  website:
    "https://nobleassets.xyz/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/Noble-Logo.svg",
  },
  repository:
    "https://github.com/strangelove-ventures/noble",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/noble",
        "https://noble-rpc.polkachu.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/noble",
        "https://noble-api.polkachu.com",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      stargaze: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "stargaze",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-204",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-4",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-536",
        order: "unordered",
        version: "ics20-1",
      },
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-88",
        order: "unordered",
        version: "ics20-1",
      },
      terra2: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "terra2",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-151",
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
          "channel-750",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-62",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-38",
        order: "unordered",
        version: "ics20-1",
      },
      impacthub: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "impacthub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-26",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-224",
        order: "unordered",
        version: "ics20-1",
      },
      neutron: {
        portId: "transfer",
        channelId:
          "channel-18",
        counterpartyChainId:
          "neutron",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-30",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

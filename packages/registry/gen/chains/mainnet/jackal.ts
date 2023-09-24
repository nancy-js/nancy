/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "jackal",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.jackalprotocol.com",
        "https://jackal-rpc.lavenderfive.com:443",
        "https://rpc-jackal.d-stake.xyz",
        "http://jkl.rpc.m.stavr.tech:11127",
        "https://jackal.rpc.bccnodes.com",
        "https://rpc.jackal.nodestake.top",
        "https://rpc-jackal.nodeist.net",
        "https://jackal-rpc.polkachu.com",
        "https://jackal-rpc.agoranodes.com",
        "https://m-jackal.rpc.utsa.tech",
        "https://jackal-rpc.kleomedes.network",
        "https://rpc-jackal.huginn.tech",
        "https://jackal.nodejumper.io",
        "https://rpc-jkl.kjinc.io",
        "https://rpc-jackal.whispernode.com:443",
        "https://jackal-mainnet-rpc.autostake.com:443",
        "https://rpc-jackal.carbonZERO.zone:443",
        "https://jackal.rpc.kjnodes.com",
        "https://jackal.rpc.silknodes.io",
      ],
    },
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
          "channel-412",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-39",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-94",
        order: "unordered",
        version: "ics20-1",
      },
      archway: {
        portId: "transfer",
        channelId:
          "channel-40",
        counterpartyChainId:
          "archway",
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
          "channel-38",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-63",
        order: "unordered",
        version: "ics20-1",
      },
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-62",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
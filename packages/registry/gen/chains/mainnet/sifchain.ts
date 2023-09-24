/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "sifchain",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.sifchain.finance:443",
        "https://sifchain-rpc.polkachu.com",
        "https://rpc-sifchain-ia.cosmosia.notional.ventures/",
        "https://sifchain-mainnet-rpc.autostake.com:443",
        "https://sif-rpc.kleomedes.network",
        "https://sifchain-rpc.publicnode.com",
      ],
    },
    channels: {
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-192",
        order: "unordered",
        version: "ics20-1",
      },
      regen: {
        portId: "transfer",
        channelId:
          "channel-10",
        counterpartyChainId:
          "regen",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-28",
        order: "unordered",
        version: "ics20-1",
      },
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-8",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-19",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-47",
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
          "channel-11",
        order: "unordered",
        version: "ics20-1",
      },
      sentinel: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "sentinel",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-36",
        order: "unordered",
        version: "ics20-1",
      },
      cryptoorgchain: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "cryptoorgchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-33",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-14",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-5",
        order: "unordered",
        version: "ics20-1",
      },
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-65",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-15",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-7",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-26",
        order: "unordered",
        version: "ics20-1",
      },
      akash: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "akash",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-24",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

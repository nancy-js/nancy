/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "akash",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.akash.forbole.com:443",
        "https://rpc-akash.ecostake.com:443",
        "https://akash-rpc.lavenderfive.com:443",
        "https://akash-rpc.polkachu.com",
        "https://rpc-akash.cosmos-spaces.cloud",
        "https://rpc-akash-ia.cosmosia.notional.ventures:443",
        "http://akash.c29r3.xyz:80/rpc",
        "https://akash-mainnet-rpc.autostake.com:443",
        "https://akash.rpc.interchain.ivaldilabs.xyz",
        "https://akash-rpc.kleomedes.network",
        "https://rpc-akash-01.stakeflow.io",
        "https://akash-mainnet-rpc.cosmonautstakes.com:443",
        "https://akash-rpc.w3coins.io",
        "https://akash-rpc.publicnode.com",
        "https://akash-rpc.validatornode.com",
      ],
    },
    channels: {
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-43",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-21",
        order: "unordered",
        version: "ics20-1",
      },
      cryptoorgchain: {
        portId: "transfer",
        channelId:
          "channel-14",
        counterpartyChainId:
          "cryptoorgchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-21",
        order: "unordered",
        version: "ics20-1",
      },
      starname: {
        portId: "transfer",
        channelId:
          "channel-23",
        counterpartyChainId:
          "starname",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-6",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-6",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-5",
        order: "unordered",
        version: "ics20-1",
      },
      regen: {
        portId: "transfer",
        channelId:
          "channel-13",
        counterpartyChainId:
          "regen",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-7",
        order: "unordered",
        version: "ics20-1",
      },
      archway: {
        portId: "transfer",
        channelId:
          "channel-109",
        counterpartyChainId:
          "archway",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-26",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-1",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-70",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-44",
        order: "unordered",
        version: "ics20-1",
      },
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-35",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-29",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-184",
        order: "unordered",
        version: "ics20-1",
      },
      sifchain: {
        portId: "transfer",
        channelId:
          "channel-24",
        counterpartyChainId:
          "sifchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2",
        order: "unordered",
        version: "ics20-1",
      },
      sentinel: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "sentinel",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-6",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-63",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-64",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
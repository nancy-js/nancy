/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "regen",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc-regen.ecostake.com",
        "http://public-rpc.regen.vitwit.com:26657",
        "https://regen.stakesystems.io:2053",
        "http://rpc.regen.forbole.com:80",
        "https://rpc-regen-ia.cosmosia.notional.ventures/",
        "https://regen-mainnet-rpc.autostake.com:443",
        "https://regen-rpc.easy2stake.com",
        "https://regen-rpc.theamsolutions.info",
        "https://regen-rpc.w3coins.io",
        "https://regen-rpc.publicnode.com",
      ],
    },
    channels: {
      sifchain: {
        portId: "transfer",
        channelId:
          "channel-28",
        counterpartyChainId:
          "sifchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-10",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-100",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-68",
        order: "unordered",
        version: "ics20-1",
      },
      akash: {
        portId: "transfer",
        channelId:
          "channel-7",
        counterpartyChainId:
          "akash",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-13",
        order: "unordered",
        version: "ics20-1",
      },
      sentinel: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "sentinel",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-11",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-14",
        counterpartyChainId:
          "persistence",
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
          "channel-29",
        counterpartyChainId:
          "starname",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-14",
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
          "channel-8",
        order: "unordered",
        version: "ics20-1",
      },
      cryptoorgchain: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "cryptoorgchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-25",
        order: "unordered",
        version: "ics20-1",
      },
      quicksilver: {
        portId: "transfer",
        channelId:
          "channel-61",
        counterpartyChainId:
          "quicksilver",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-17",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-185",
        order: "unordered",
        version: "ics20-1",
      },
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-16",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
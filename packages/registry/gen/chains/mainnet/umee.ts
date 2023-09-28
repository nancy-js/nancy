/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "umee",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://umee-rpc.polkachu.com",
        "https://rpc-umee-ia.cosmosia.notional.ventures/",
        "https://umee-mainnet-rpc.autostake.com:443",
        "http://umee.rpc.m.stavr.tech:10457",
        "https://rpc-umee.cosmos-spaces.cloud",
        "http://rpc-umee-0.node75.org:26657",
        "https://umee-rpc.quantnode.tech",
        "https://umee-rpc.tienthuattoan.ventures",
        "https://rpc-umee-01.stakeflow.io",
        "https://umee-rpc.staketab.org:443",
        "https://rpc.umee.stake-take.com",
        "https://umee-rpc.theamsolutions.info",
        "https://umee.rpc.kjnodes.com",
        "https://umee-rpc.w3coins.io",
        "https://rpc-umee.mms.team",
        "https://rpc-umee.mzonder.com",
      ],
    },
  },
  ibc: {
    channels: {
      crescent: {
        portId: "transfer",
        channelId:
          "channel-49",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-36",
        order: "unordered",
        version: "ics20-1",
      },
      quicksilver: {
        portId: "transfer",
        channelId:
          "channel-53",
        counterpartyChainId:
          "quicksilver",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-49",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-184",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-51",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-81",
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
          "channel-288",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-34",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-29",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

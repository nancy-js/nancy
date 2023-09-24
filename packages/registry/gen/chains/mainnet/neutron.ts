/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "neutron",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc-kralum.neutron-1.neutron.org",
        "https://rpc.novel.remedy.tm.p2p.org",
        "https://neutron-rpc.lavenderfive.com",
        "https://rpc-neutron.whispernode.com",
        "https://rpc-neutron.cosmos-spaces.cloud",
        "http://posthuman-neutron-rpc.ingress.europlots.com",
        "http://rpc.neutron.nodestake.top",
        "https://neutron-rpc.publicnode.com",
        "https://community.nuxian-node.ch:6797/neutron/trpc",
      ],
    },
    channels: {
      sei: {
        portId: "transfer",
        channelId:
          "channel-19",
        counterpartyChainId:
          "sei",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-15",
        order: "unordered",
        version: "ics20-1",
      },
      mars: {
        portId: "transfer",
        channelId:
          "channel-16",
        counterpartyChainId:
          "mars",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-37",
        order: "unordered",
        version: "ics20-1",
      },
      terra2: {
        portId: "transfer",
        channelId:
          "channel-5",
        counterpartyChainId:
          "terra2",
        counterpartyPortId:
          "wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce",
        counterpartyChannelId:
          "channel-167",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-10",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-874",
        order: "unordered",
        version: "ics20-1",
      },
      axelar: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "axelar",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-78",
        order: "unordered",
        version: "ics20-1",
      },
      stargaze: {
        portId: "transfer",
        channelId:
          "channel-18",
        counterpartyChainId:
          "stargaze",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-191",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-8",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-123",
        order: "unordered",
        version: "ics20-1",
      },
      composable: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "composable",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-18",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-75",
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
          "channel-569",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
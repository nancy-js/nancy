/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "bluzelle",
  displayName: "Bluzelle",
  website:
    "https://bluzelle.com/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg",
  },
  repository:
    "https://github.com/bluzelle/bluzelle-public",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/bluzelle",
        "https://a.client.sentry.net.bluzelle.com:26657",
        "https://b.client.sentry.net.bluzelle.com:26657",
        "https://c.client.sentry.net.bluzelle.com:26657",
        "https://bluzelle-rpc.genznodes.dev",
        "https://rpc-curium.nodine.id",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/bluzelle",
        "https://a.client.sentry.net.bluzelle.com:1317",
        "https://b.client.sentry.net.bluzelle.com:1317",
        "https://c.client.sentry.net.bluzelle.com:1317",
        "https://bluzelle-api.genznodes.dev/",
        "https://api-bluzelle.nodeist.net",
        "https://api-curium.nodine.id",
      ],
    },
  },
  evm: null,
  ibc: {
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
          "channel-763",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
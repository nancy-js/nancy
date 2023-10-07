/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "nolus",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/nolus",
        "https://pirin-cl.nolus.network:26657",
        "https://nolus-mainnet-rpc.autostake.com:443",
        "https://nolus-rpc.lavenderfive.com:443",
        "https://nolus-rpc.sphincs.plus",
        "https://nolus.rpc.liveraven.net",
        "https://rpc-nolus.architectnodes.com",
        "https://nolus.rpc.kjnodes.com",
        "https://nolus-rpc.enigma-validator.com/",
        "https://nolus-rpc.w3coins.io",
        "https://rpc-nolus.cosmos-spaces.cloud",
        "https://nolus-rpc.publicnode.com",
        "https://community.nuxian-node.ch:6797/nolus/trpc",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/nolus",
        "https://pirin-cl.nolus.network:1317",
        "https://nolus-mainnet-lcd.autostake.com:443",
        "https://nolus-api.lavenderfive.com:443",
        "https://nolus-lcd.sphincs.plus",
        "https://api-nolus.cosmos-spaces.cloud",
        "https://nolus.api.liveraven.net",
        "https://rest-nolus.architectnodes.com",
        "https://nolus.api.kjnodes.com",
        "https://nolus-lcd.enigma-validator.com/",
        "https://nolus-api.w3coins.io",
        "https://nolus-rest.publicnode.com",
        "https://community.nuxian-node.ch:6797/nolus/crpc",
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
          "channel-783",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

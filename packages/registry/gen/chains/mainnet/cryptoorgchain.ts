/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "cryptoorgchain",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/cryptoorgchain",
        "https://rpc.mainnet.crypto.org/",
        "https://rpc-cryptoorgchain-ia.cosmosia.notional.ventures/",
        "https://rpc-cryptoorgchain.ecostake.com",
        "https://cryptocom-rpc.polkachu.com",
        "https://cryptocom-rpc.w3coins.io",
        "https://rpc-cryptoorg.cosmos-spaces.cloud",
        "https://cro-chain-rpc.publicnode.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/cryptoorgchain",
        "https://rest.mainnet.crypto.org/",
        "https://api-cryptoorgchain-ia.cosmosia.notional.ventures/",
        "https://cryptocom-api.polkachu.com",
        "https://rest-cryptoorgchain.ecostake.com",
        "https://cryptocom-api.w3coins.io",
        "https://api-cryptoorg.cosmos-spaces.cloud",
        "https://cro-chain-rest.publicnode.com",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-10",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-5",
        order: "unordered",
        version: "ics20-1",
      },
      akash: {
        portId: "transfer",
        channelId:
          "channel-21",
        counterpartyChainId:
          "akash",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-14",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-27",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-187",
        order: "unordered",
        version: "ics20-1",
      },
      starname: {
        portId: "transfer",
        channelId:
          "channel-22",
        counterpartyChainId:
          "starname",
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
          "channel-61",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-40",
        order: "unordered",
        version: "ics20-1",
      },
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-23",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-13",
        order: "unordered",
        version: "ics20-1",
      },
      persistence: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-11",
        order: "unordered",
        version: "ics20-1",
      },
      sifchain: {
        portId: "transfer",
        channelId:
          "channel-33",
        counterpartyChainId:
          "sifchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      regen: {
        portId: "transfer",
        channelId:
          "channel-25",
        counterpartyChainId:
          "regen",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-12",
        order: "unordered",
        version: "ics20-1",
      },
      evmos: {
        portId: "transfer",
        channelId:
          "channel-57",
        counterpartyChainId:
          "evmos",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-31",
        order: "unordered",
        version: "ics20-1",
      },
      sentinel: {
        portId: "transfer",
        channelId:
          "channel-19",
        counterpartyChainId:
          "sentinel",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-7",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

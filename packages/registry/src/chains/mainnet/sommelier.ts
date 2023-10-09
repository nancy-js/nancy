/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "sommelier",
  displayName: "Sommelier",
  website:
    "https://sommelier.finance/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg",
  },
  repository:
    "https://github.com/PeggyJV/sommelier",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/sommelier",
        "https://sommelier-rpc.polkachu.com",
        "https://rpc-sommelier.pupmos.network",
        "https://sommelier-rpc.lavenderfive.com/",
        "https://sommelier-mainnet-rpc.autostake.com:443",
        "https://rpc-sommelier.cosmos-spaces.cloud",
        "https://rpc.sommelier.nodexcapital.com",
        "https://somm-rpc.kleomedes.network",
        "https://sommelier-rpc.w3coins.io",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/sommelier",
        "https://api-sommelier.pupmos.network",
        "https://sommelier-api.polkachu.com",
        "https://sommelier-api.lavenderfive.com/",
        "https://api-sommelier.cosmos-spaces.cloud",
        "https://sommelier-mainnet-lcd.autostake.com:443",
        "https://rest.sommelier.nodexcapital.com",
        "https://somm-api.kleomedes.network",
        "https://sommelier-api.w3coins.io",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      stride: {
        portId: "transfer",
        channelId:
          "channel-71",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-150",
        order: "unordered",
        version: "ics20-1",
      },
      injective: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "injective",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-93",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-4",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-69",
        order: "unordered",
        version: "ics20-1",
      },
      axelar: {
        portId: "transfer",
        channelId:
          "channel-5",
        counterpartyChainId:
          "axelar",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-72",
        order: "unordered",
        version: "ics-20",
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
          "channel-165",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
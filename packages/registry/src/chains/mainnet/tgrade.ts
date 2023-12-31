/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "tgrade",
  displayName: "Tgrade",
  website:
    "https://tgrade.finance/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg",
  },
  repository:
    "https://github.com/confio/tgrade",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/tgrade",
        "https://rpc.mainnet-1.tgrade.confio.run",
        "https://rpc.tgrade.posthuman.digital",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/tgrade",
        "https://api.mainnet-1.tgrade.confio.run",
        "https://lcd.tgrade.posthuman.digital",
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
          "channel-263",
        order: "unordered",
        version: "ics20-1",
      },
      evmos: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "evmos",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-34",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

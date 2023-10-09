/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "emoney",
  displayName: "e-Money",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg",
  },
  repository:
    "https://github.com/e-money/em-ledger",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/emoney",
        "https://emoney.validator.network",
        "https://rpc-emoney-ia.cosmosia.notional.ventures/",
        "https://rpc.emoney.quokkastake.io",
        "https://e-money-rpc.ibs.team",
        "https://rpc.emoney.bh.rocks",
        "https://emoney-mainnet-rpc.autostake.com:443",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/emoney",
        "https://emoney.validator.network/api/",
        "https://api-emoney-ia.cosmosia.notional.ventures/",
        "https://api.emoney.quokkastake.io",
        "https://e-money-api.ibs.team",
        "https://api.emoney.bh.rocks",
        "https://emoney-mainnet-lcd.autostake.com:443",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      juno: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-23",
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
          "channel-37",
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
          "channel-202",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
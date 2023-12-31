/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "omniflixhub",
  displayName: "OmniFlix",
  website:
    "https://omniflix.co/home",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg",
  },
  repository:
    "https://github.com/OmniFlix/omniflixhub",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/omniflixhub",
        "https://omniflix.kingnodes.com",
        "https://rpc.omniflix.nodestake.top",
        "https://rpc.omniflix.chaintools.tech/",
        "https://rpc-omniflixhub-ia.cosmosia.notional.ventures/",
        "https://omniflixhub-rpc.lavenderfive.com/",
        "https://rpc-omniflix.huginn.tech:443",
        "https://rpc.omniflix.silentvalidator.com/",
        "https://omniflix.nodejumper.io",
        "https://omniflixhub-mainnet-rpc.autostake.com:443",
        "https://rpc-omniflix.architectnodes.com",
        "https://omniflix-rpc.staketab.org:443",
        "https://rpc-omniflixhub.cosmos-spaces.cloud",
        "https://omniflix-rpc.dakshavalidator.in",
        "https://rpc-omniflix.mzonder.com:443",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/omniflixhub",
        "https://api.omniflix.nodestake.top",
        "https://api-omniflixhub-ia.cosmosia.notional.ventures/",
        "https://omniflixhub-api.lavenderfive.com/",
        "https://api-omniflixhub.cosmos-spaces.cloud",
        "https://api.omniflix.silentvalidator.com/",
        "https://omniflix.nodejumper.io:1317",
        "https://omniflix.kingnodes.com",
        "https://omniflixhub-mainnet-lcd.autostake.com:443",
        "https://rest-omniflix.architectnodes.com",
        "https://omniflix-rest.staketab.org",
        "https://omniflix-api.dakshavalidator.in",
        "https://api-omniflix.mzonder.com:443",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-306",
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
          "channel-199",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-26",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-70",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

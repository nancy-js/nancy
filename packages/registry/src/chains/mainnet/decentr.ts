/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "decentr",
  displayName: "Decentr",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg",
  },
  repository:
    "https://github.com/Decentr-net/decentr",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/decentr",
        "https://poseidon.mainnet.decentr.xyz",
        "https://decentr-rpc.badgerbite.io:443",
        "https://rpc.decentr.chaintools.tech/",
        "https://decentr-rpc.ibs.team/",
        "https://rpc-dcntr.nodine.id/",
        "https://rpc-decentr.sxlzptprjkt.xyz",
        "https://rpc.decentr.hexnodes.co",
        "https://rpc.decentr.nodexcapital.com",
        "https://rpc-decentr.comunitynode.my.id",
        "https://rpc.decentr.indonode.net",
        "https://rpc-decentr.mms.team/",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/decentr",
        "https://rest.mainnet.decentr.xyz",
        "https://api.decentr.chaintools.tech/",
        "https://decentr-api.ibs.team/",
        "https://api-dcntr.nodine.id",
        "https://api-decentr.sxlzptprjkt.xyz",
        "https://lcd.decentr.hexnodes.co",
        "https://rest.decentr.nodexcapital.com",
        "https://api-decentr.comunitynode.my.id",
        "https://api.decentr.indonode.net",
        "https://api-decentr.mms.team",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-181",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "planq",
  displayName: "Planq",
  website:
    "https://planq.network/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg",
  },
  repository:
    "https://github.com/planq-network/planq",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/planq",
        "https://rpc.planq.network",
        "https://planq.rpc.bccnodes.com",
        "https://rpc.planq.nodestake.top",
        "https://rpc-planq.nodine.id",
        "https://rpc-planq.comunitynode.my.id",
        "https://planq-rpc.kynraze.com",
        "https://rpc-planq.sxlzptprjkt.xyz",
        "https://rpc.planq.nodexcapital.com",
        "https://rpc.planq.indonode.net",
        "https://rpc.planq.hexnodes.co",
        "https://planq-rpc.genznodes.dev",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/planq",
        "https://rest.planq.network",
        "https://planq.api.bccnodes.com",
        "https://api.planq.nodestake.top",
        "https://api-planq.nodine.id",
        "https://api-planq.comunitynode.my.id",
        "https://planq-api.kynraze.com",
        "https://api-planq.sxlzptprjkt.xyz",
        "https://rest.planq.nodexcapital.com",
        "https://api.planq.indonode.net",
        "https://lcd.planq.hexnodes.co",
        "https://planq-api.genznodes.dev",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://evm-rpc.planq.network",
        "https://jsonrpc.planq.nodestake.top",
        "https://rpc-evm-planq.sxlzptprjkt.xyz",
        "https://jsonrpc.planq.nodexcapital.com",
        "https://planq-rpc-evm.genznodes.dev",
      ],
    },
  },
  ibc: {
    channels: {
      sei: {
        portId: "transfer",
        channelId:
          "channel-59",
        counterpartyChainId:
          "sei",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-13",
        order: "unordered",
        version: "ics20-1",
      },
      gravitybridge: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "gravitybridge",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-102",
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
          "channel-492",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-446",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

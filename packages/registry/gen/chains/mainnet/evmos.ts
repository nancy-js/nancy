/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "evmos",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/evmos",
        "https://rpc-evmos.ecostake.com",
        "https://rpc-evmos.whispernode.com:443",
        "https://evmos-rpc.lavenderfive.com:443",
        "https://tendermint.bd.evmos.org:26657",
        "https://rpc-evmos-ia.cosmosia.notional.ventures:443",
        "https://rpc.evmos.interbloc.org",
        "https://rpc-evmos.cosmos-spaces.cloud",
        "https://rpc.evmos.testnet.run",
        "https://rpc.evmos.nodestake.top",
        "https://rpc.evmos.bh.rocks",
        "https://rpc.evmos.chaintools.tech/",
        "https://evmos-rpc.polkachu.com",
        "https://rpc.evmos.silentvalidator.com/",
        "https://rpc.evmos.tcnetwork.io",
        "https://evmos.rpc.stakin-nodes.com",
        "https://rpc-evmos.architectnodes.com",
        "https://evmos-rpc.validatrium.club",
        "https://evmos-mainnet-rpc.autostake.com:443",
        "https://evmos-rpc.stakeandrelax.net",
        "https://evmos.rpc.interchain.ivaldilabs.xyz",
        "https://evmos.api.onfinality.io/public",
        "https://evmos-rpc.publicnode.com",
        "https://rpc-evmos-01.stakeflow.io",
        "https://evmos-rpc.theamsolutions.info",
        "https://rpc-evmos.validavia.me",
        "https://evmos-rpc.w3coins.io",
        "https://rpc-evmos.mms.team",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/evmos",
        "https://lcd-evmos.whispernode.com:443",
        "https://rest.bd.evmos.org:1317",
        "https://evmos-api.lavenderfive.com:443",
        "https://api-evmos-ia.cosmosia.notional.ventures/",
        "https://api.evmos.interbloc.org",
        "https://lcd.evmos.bh.rocks",
        "https://api-evmos.cosmos-spaces.cloud",
        "https://api.evmos.nodestake.top",
        "https://evmos-api.polkachu.com",
        "https://api.evmos.silentvalidator.com/",
        "https://rest.evmos.tcnetwork.io",
        "https://evmos.rest.stakin-nodes.com",
        "https://rest-evmos.architectnodes.com",
        "https://evmos-api.validatrium.club",
        "https://evmos-mainnet-lcd.autostake.com:443",
        "https://evmos-api.stakeandrelax.net",
        "https://rest-evmos.ecostake.com",
        "https://evmos.rest.interchain.ivaldilabs.xyz",
        "https://evmos-rest.publicnode.com",
        "https://api-evmos-01.stakeflow.io",
        "https://evmos-api.theamsolutions.info",
        "https://lcd-evmos.validavia.me",
        "https://evmos-api.w3coins.io",
        "https://api-evmos.mms.team",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://eth.bd.evmos.org:8545",
        "https://jsonrpc-evmos-ia.cosmosia.notional.ventures/",
        "https://evmos-json-rpc.stakely.io",
        "https://jsonrpc.evmos.nodestake.top",
        "https://json-rpc.evmos.bh.rocks",
        "https://evmos-json-rpc.agoranodes.com",
        "https://evm-rpc.evmos.silentvalidator.com/",
        "https://json-rpc.evmos.tcnetwork.io",
        "https://evmosevm.rpc.stakin-nodes.com",
        "https://evmos-evm.publicnode.com",
        "https://evmos-jsonrpc.theamsolutions.info",
        "https://jsonrpc-evmos.mms.team",
      ],
    },
  },
  ibc: {
    channels: {
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-18",
        order: "unordered",
        version: "ics20-1",
      },
      composable: {
        portId: "transfer",
        channelId:
          "channel-82",
        counterpartyChainId:
          "composable",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-7",
        order: "unordered",
        version: "ics20-1",
      },
      injective: {
        portId: "transfer",
        channelId:
          "channel-10",
        counterpartyChainId:
          "injective",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-83",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-7",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-18",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-23",
        order: "unordered",
        version: "ics20-1",
      },
      kava: {
        portId: "transfer",
        channelId:
          "channel-83",
        counterpartyChainId:
          "kava",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-117",
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
          "channel-204",
        order: "unordered",
        version: "ics20-1",
      },
      coreum: {
        portId: "transfer",
        channelId:
          "channel-87",
        counterpartyChainId:
          "coreum",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-8",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-25",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      cryptoorgchain: {
        portId: "transfer",
        channelId:
          "channel-31",
        counterpartyChainId:
          "cryptoorgchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-57",
        order: "unordered",
        version: "ics20-1",
      },
      acrechain: {
        portId: "transfer",
        channelId:
          "channel-40",
        counterpartyChainId:
          "acrechain",
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
          "channel-3",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-292",
        order: "unordered",
        version: "ics20-1",
      },
      tgrade: {
        portId: "transfer",
        channelId:
          "channel-34",
        counterpartyChainId:
          "tgrade",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      agoric: {
        portId: "transfer",
        channelId:
          "channel-85",
        counterpartyChainId:
          "agoric",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-57",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;

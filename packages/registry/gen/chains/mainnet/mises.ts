/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "mises",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/mises",
        "https://rpc.gw.mises.site:443",
        "https://e1.mises.site:443",
        "https://e2.mises.site:443",
        "https://w1.mises.site:443",
        "https://w2.mises.site:443",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/mises",
      ],
    },
  },
  evm: null,
  ibc: {},
} as const;

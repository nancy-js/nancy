// import evmos from "@nancy/registry/gen/chains/mainnet/evmos.js";
// import cosmoshub from "@nancy/registry/gen/chains/mainnet/cosmoshub.js";

// import { describe, expect, it } from "bun:test";
// import { createEVMClient } from "./createEVMClient.js";
// const config = {
//   chains: {
//     evmos,
//     cosmoshub: () =>
//       import(
//         "@nancy/registry/gen/chains/mainnet/cosmoshub.js"
//       ),
//   },
// } as const;

// describe("createEVMClient", () => {
//   it("works", async () => {
//     const evmosClient = createEVMClient(config, "evmos");

//     const response = await evmosClient
//       .send("eth_blockNumber", [])
//       .unwrap();

//     expect(parseInt(response.result)).toBeGreaterThan(0);
//   });
// });

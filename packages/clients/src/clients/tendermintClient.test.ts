// import evmos from "@nancyjs/registry/gen/chains/mainnet/evmos.js";

// import { describe, expect, it } from "bun:test";
// import { createTendermintClient } from "./createTendermintClient.js";

// const config = {
//   chains: {
//     evmos,
//     cosmoshub: () =>
//       import(
//         "@nancyjs/registry/gen/chains/mainnet/cosmoshub.js"
//       ),
//   },
// } as const;

// describe("Tendermint Client", () => {
//   it("works", async () => {
//     const evmosClient = createTendermintClient(
//       config,
//       "evmos",
//     );

//     const response = await evmosClient
//       .send("GET /block", {})
//       .unwrap();

//     expect(
//       parseInt(
//         response.result?.block?.header?.height ?? "",
//       ),
//     ).toBeGreaterThan(0);

//     const cosmoshubClient = createTendermintClient(
//       config,
//       "cosmoshub",
//     );

//     const cosmoshubResponse = await cosmoshubClient
//       .send("GET /block", {})
//       .unwrap();

//     expect(
//       parseInt(
//         cosmoshubResponse.result?.block?.header?.height ??
//           "",
//       ),
//     ).toBeGreaterThan(0);
//   });
// });

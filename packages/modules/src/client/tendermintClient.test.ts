// import evmos from "@nancy/registry/gen/chains/mainnet/evmos.ts";

// import { describe, expect, it } from "bun:test";
// import { createTendermintClient } from "./createTendermintClient.ts";

// const config = {
//   chains: {
//     evmos,
//     cosmoshub: () =>
//       import(
//         "@nancy/registry/gen/chains/mainnet/cosmoshub.ts"
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

import type { EvmJSONRPCMethods } from "./evm-types.js";
// import type { ClientOptionsish } from "../createClient.js";
// import {
//   makeUnwrapablePromise,
//   tryCatchAsync,
//   R,
// } from "@nancy/core";

// export const makeEVMApiClient =
//   (clientOptions: ClientOptionsish) =>
//   <TMethod extends keyof EvmJSONRPCMethods>(
//     method: TMethod,
//     properties: {
//       id?: number;
//       params: EvmJSONRPCMethods[TMethod]["params"];
//     },
//     init: RequestInit = {},
//   ) =>
//     makeUnwrapablePromise(async () => {
//       const normalizedClientOptions =
//         typeof clientOptions === "string"
//           ? {
//               baseUrl: clientOptions,
//             }
//           : clientOptions ?? {};

//       const { baseUrl = "", fetch: customFetch = fetch } =
//         normalizedClientOptions;

//       const [networkError, res] = await tryCatchAsync(() =>
//         customFetch(baseUrl, {
//           method: "POST",
//           body: JSON.stringify({
//             jsonrpc: "2.0",
//             method,
//             params: properties.params,
//             id: properties.id ?? 1,
//           }),
//           ...init,
//         }),
//       );

//       if (networkError) {
//         return R.failWith(
//           "NetworkError",
//           networkError.message,
//           {
//             cause: networkError,
//           },
//         );
//       }

//       const [parseError, data] = await tryCatchAsync(() =>
//         res.json(),
//       );

//       if (parseError) {
//         return R.failWith(
//           "FailedToParseResponse",
//           parseError.message,
//           {
//             cause: parseError,
//           },
//         );
//       }

//       return R.ok(
//         data as {
//           jsonrpc: "2.0";
//           id: number;
//           result:
//             | EvmJSONRPCMethods[TMethod]["result"]
//             | (EvmJSONRPCMethods[TMethod] extends {
//                 errors: infer U;
//               }
//                 ? U
//                 : never);
//         },
//       );
//     });

// export type EVMClient = ReturnType<typeof makeEVMApiClient>;

export type EVMRouteMap = {
  [TMethod in keyof EvmJSONRPCMethods]: {
    params: EvmJSONRPCMethods[TMethod]["params"];
    result: {
      jsonrpc: "2.0";
      id: number;
      result: EvmJSONRPCMethods[TMethod]["result"];
    };
    errors: EvmJSONRPCMethods[TMethod] extends {
      errors: infer U;
    }
      ? U
      : undefined;
  };
};

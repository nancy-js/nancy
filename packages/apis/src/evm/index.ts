import type { EvmJSONRPCMethods } from "./evm-types.js";
import type { ClientOptionsish } from "../createClient.js";
import {
  makeError,
  makeUnwrapablePromise,
  tryCatch,
} from "@nancy/core";

export const makeEVMClient =
  (clientOptions: ClientOptionsish) =>
  <TMethod extends keyof EvmJSONRPCMethods>(
    method: TMethod,
    properties: {
      id?: number;
      params: EvmJSONRPCMethods[TMethod]["params"];
    },
    init: RequestInit = {},
  ) =>
    makeUnwrapablePromise(async () => {
      const normalizedClientOptions =
        typeof clientOptions === "string"
          ? {
              baseUrl: clientOptions,
            }
          : clientOptions ?? {};

      const { baseUrl = "", fetch: customFetch = fetch } =
        normalizedClientOptions;

      const [networkError, res] = await tryCatch(() =>
        customFetch(baseUrl, {
          method: "POST",
          body: JSON.stringify({
            jsonrpc: "2.0",
            method,
            params: properties.params,
            id: properties.id ?? 1,
          }),
          ...init,
        }),
      );

      if (networkError) {
        return [
          makeError("NetworkError", networkError.message, {
            cause: networkError,
          }),
          undefined,
        ] as const;
      }

      const [parseError, data] = await tryCatch(
        () => res.json() as unknown,
      );

      if (parseError) {
        return [
          makeError(
            "FailedToParseResponse",
            parseError.message,
            {
              cause: parseError,
            },
          ),
          undefined,
        ] as const;
      }

      return [
        undefined,
        data as {
          jsonrpc: "2.0";
          id: number;
          result:
            | EvmJSONRPCMethods[TMethod]["result"]
            | (EvmJSONRPCMethods[TMethod] extends {
                errors: infer U;
              }
                ? U
                : never);
        },
      ] as const;
    });

export type EVMClient = ReturnType<typeof makeEVMClient>;

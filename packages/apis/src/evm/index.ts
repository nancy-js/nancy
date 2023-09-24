import { mergeHeaders } from "openapi-fetch";

import type { EvmJSONRPCMethods } from "./evm-types.ts";
import type { ClientOptions } from "../createClient.ts";

export const makeEVMClient =
  (
    clientOptions?:
      | ClientOptions
      | string,
  ) =>
  async <
    TMethod extends
      keyof EvmJSONRPCMethods,
  >(
    method: TMethod,
    properties: {
      id?: number;
      params: EvmJSONRPCMethods[TMethod]["params"];
    },
    init: RequestInit = {},
  ) => {
    const normalizedClientOptions =
      typeof clientOptions ===
      "string"
        ? {
            baseUrl:
              clientOptions,
          }
        : clientOptions ?? {};

    const {
      baseUrl = "",
      fetch:
        customFetch = fetch,
    } =
      normalizedClientOptions;

    const response =
      await customFetch(
        baseUrl,
        {
          method: "POST",
          headers:
            mergeHeaders(
              normalizedClientOptions?.headers,
              init.headers,
            ),
          body: JSON.stringify(
            {
              jsonrpc: "2.0",
              method,
              params:
                properties.params,
              id:
                properties.id ??
                1,
            },
          ),
          ...init,
        },
      );

    const data =
      await response.json();

    return data as {
      jsonrpc: "2.0";
      id: number;
      result:
        | EvmJSONRPCMethods[TMethod]["result"]
        | (EvmJSONRPCMethods[TMethod] extends {
            errors: infer U;
          }
            ? U
            : never);
    };
  };

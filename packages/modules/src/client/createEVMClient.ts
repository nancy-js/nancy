import { EVMRouteMap } from "@nancy/apis";
import { ChainMap, Config } from "./types.js";
import { get } from "lodash-es";
import { R, makeUnwrapablePromise } from "@nancy/core";
import {
  resolveChainConfig,
  request,
  mergeUrl,
  mergeRequestInit,
} from "./utils.ts";

export const createEVMClient = <const T extends ChainMap>(
  config: Config<T>,
  chainKey: keyof T & string,
) =>
  ({
    send: <T extends keyof EVMRouteMap>(
      method: T,
      params: EVMRouteMap[T]["params"],
      init: RequestInit = {},
    ) =>
      makeUnwrapablePromise(async () => {
        const chainConfig = await resolveChainConfig(
          config,
          chainKey,
        );
        const baseUrl: unknown = get(
          chainConfig,
          "evm.api.jsonrpc-http[0]",
        );
        if (!chainConfig || typeof baseUrl !== "string") {
          return R.failWith(
            "UnsupportedChain",
            `Chain ${chainKey} is not supported by this client.`,
          );
        }

        return request<EVMRouteMap[T]["result"]>(
          mergeUrl(baseUrl, method),
          mergeRequestInit(
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                jsonrpc: "2.0",
                method,
                params,
                id: 1,
              }),
            },
            init,
          ),
        );
      }),
  }) as const;

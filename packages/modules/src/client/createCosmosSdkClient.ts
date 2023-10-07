import { CosmosRouteMap } from "@nancy/apis";
import { ChainMap, Config } from "./types.js";
import { get } from "lodash-es";
import { R, makeUnwrapablePromise } from "@nancy/core";
import {
  resolveChainConfig,
  request,
  interpolateUrl,
  mergeUrl,
  mergeRequestInit,
} from "./utils.ts";

export const createCosmosSdkClient = <T extends ChainMap>(
  config: Config<T>,
  chainKey: keyof T & string,
) =>
  ({
    send: <T extends keyof CosmosRouteMap>(
      method: T,
      params: CosmosRouteMap[T]["params"],
      init: RequestInit = {},
    ) =>
      makeUnwrapablePromise(async () => {
        const chainConfig = await resolveChainConfig(
          config,
          chainKey,
        );
        const baseUrl: unknown = get(
          chainConfig,
          "cosmossdk.api.rest[0]",
        );
        if (!chainConfig || typeof baseUrl !== "string") {
          return R.failWith(
            "UnsupportedChain",
            `Chain ${chainKey} is not supported by this client.`,
          );
        }

        const [reqMethod = "GET", reqPath = ""] =
          method.split(" ");

        const body = get(params, "params.body", undefined);

        return request<CosmosRouteMap[T]["result"]>(
          interpolateUrl(
            mergeUrl(baseUrl, reqPath),
            get(params as unknown, "params.path", {}),
            get(params as unknown, "params.query", {}),
          ),
          mergeRequestInit(
            {
              method: reqMethod,
              headers: {
                "Content-Type": "application/json",
              },
              body: body ? JSON.stringify(body) : undefined,
            },
            init,
          ),
        );
      }),
  }) as const;

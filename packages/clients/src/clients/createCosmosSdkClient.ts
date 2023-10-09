import { ChainMap, Config } from "./types.js";
import { get } from "lodash-es";
import { R, makeUnwrapablePromise } from "@nancyjs/core";
import {
  resolveChainConfig,
  request,
  interpolateUrl,
  mergeUrl,
  mergeRequestInit,
} from "./utils.js";
import { CosmosRouteMap } from "../cosmos/index.js";

export function createCosmosSdkClient<T extends ChainMap>(
  config: Config<T>,
  chainKey: keyof T & string
) {
  return {
    send: <T extends keyof CosmosRouteMap>(
      method: T,
      params: CosmosRouteMap[T]["params"],
      init: RequestInit = {}
    ) =>
      makeUnwrapablePromise(async () => {
        const chainConfig = await resolveChainConfig(
          config,
          chainKey
        );
        const baseUrl: unknown = get(
          chainConfig,
          "cosmossdk.api.rest[0]"
        );

        if (!chainConfig || typeof baseUrl !== "string") {
          return R.failWith(
            "UnsupportedChain",
            `Chain ${chainKey} is not supported by this client.`
          );
        }

        const [reqMethod = "GET", reqPath = ""] =
          method.split(" ");

        const body = get(params, "body", undefined);

        return request<CosmosRouteMap[T]["result"]>(
          interpolateUrl(
            mergeUrl(baseUrl, reqPath),
            get(params as unknown, "path", {}),
            get(params as unknown, "query", {})
          ),
          mergeRequestInit(
            {
              method: reqMethod,
              headers: {
                "Content-Type": "application/json",
              },
              body: body ? JSON.stringify(body) : undefined,
            },
            init
          )
        );
      }),
  } as const;
}

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
import { TendermintRouteMap } from "../tendermint/index.js";

export const createTendermintClient = <T extends ChainMap>(
  config: Config<T>,
  chainKey: keyof T & string
) =>
  ({
    send: <T extends keyof TendermintRouteMap>(
      method: T,
      params: TendermintRouteMap[T]["params"],
      init: RequestInit = {}
    ) =>
      makeUnwrapablePromise(async () => {
        const chainConfig = await resolveChainConfig(
          config,
          chainKey
        );
        const baseUrl: unknown = get(
          chainConfig,
          "tendermint.api.jsonrpc-http[0]"
        );
        if (!chainConfig || typeof baseUrl !== "string") {
          return R.failWith(
            "UnsupportedChain",
            `Chain ${chainKey} is not supported by this client.`
          );
        }

        const [reqMethod = "GET", reqPath = ""] =
          method.split(" ");

        const body = get(params, "params.body", undefined);

        return request<TendermintRouteMap[T]["result"]>(
          interpolateUrl(
            mergeUrl(baseUrl, reqPath),
            get(params as unknown, "params.path", {}),
            get(params as unknown, "params.query", {})
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
  } as const);

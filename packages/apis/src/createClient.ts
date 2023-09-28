import {
  Result,
  isPlainObject,
  makeError,
  makeUnwrapablePromise,
  tryCatch,
} from "@nancy/core";
import { HeadersOptions } from "openapi-fetch";
import { paths } from "./tendermint/openapi-types.js";

export interface ClientOptions
  extends Omit<RequestInit, "headers"> {
  /** set the common root URL for all API requests */
  baseUrl: string;
  /** custom fetch (defaults to globalThis.fetch) */
  fetch?: typeof fetch;

  headers?: HeadersOptions;
}

export type ClientOptionsish = ClientOptions | string;

type InferRoutes<TPaths extends {}> = FromEntries<
  {
    [K in keyof TPaths]: keyof TPaths[K] extends infer U
      ? U extends keyof TPaths[K]
        ? [
            `${Uppercase<U & string>} ${K & string}`,
            TPaths[K][U],
          ]
        : never
      : never;
  }[keyof TPaths]
>;
type FromEntries<T extends [string, any]> = {
  [K in T as K[0]]: K[1];
};

type ExtractParams<T extends {}> =
  "parameters" extends keyof T ? T["parameters"] : unknown;

type ExtractRequestBody<T extends {}> = T extends {
  requestBody: {
    content:
      | {
          "*/*": infer U;
        }
      | {
          "application/json": infer U;
        };
  };
}
  ? { body: U }
  : unknown;

type InferParams<T extends {}> = ExtractParams<T> &
  ExtractRequestBody<T>;

type InferSuccess<T extends {}> = T extends {
  responses: {
    200: {
      content: infer U;
    };
  };
}
  ? U[keyof U]
  : never;

export const createClientFactory =
  <TRoutes extends {}>() =>
  (clientOptions: ClientOptionsish) => {
    let { baseUrl, fetch: customFetch = fetch } =
      typeof clientOptions === "string"
        ? { baseUrl: clientOptions }
        : clientOptions;

    if (baseUrl.endsWith("/")) {
      baseUrl = baseUrl.slice(0, -1);
    }
    return <TQuery extends keyof InferRoutes<TRoutes>>(
      query: TQuery,
      params: InferParams<InferRoutes<TRoutes>[TQuery]> & {
        init?: RequestInit;
      },
    ) =>
      makeUnwrapablePromise(async () => {
        let [method = "GET", pathname = ""] =
          query.split(" ");

        if (
          isPlainObject(params) &&
          "path" in params &&
          isPlainObject(params.path)
        ) {
          for (const [key, value] of Object.entries(
            params.path,
          )) {
            pathname = pathname.replace(
              new RegExp(`{${key}}`, "g"),
              String(value),
            );
          }
        }
        const url = new URL(baseUrl + pathname);

        if (
          isPlainObject(params) &&
          "query" in params &&
          isPlainObject(params.query)
        ) {
          for (const [key, value] of Object.entries(
            params.query,
          )) {
            if (!value) continue;
            url.searchParams.set(
              key,
              encodeURIComponent(String(value)),
            );
          }
        }
        const [networkError, res] = await tryCatch(() =>
          customFetch(url, {
            method,
            body:
              isPlainObject(params) && "body" in params
                ? JSON.stringify(params.body)
                : undefined,
            ...(params.init ?? {}),
          }),
        );

        if (networkError) {
          return [
            makeError(
              "NetworkError",
              networkError.message,
              {
                cause: networkError,
              },
            ),
            undefined,
          ] as const;
        }
        const [parseError, json] = await tryCatch(
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

        if (res.ok) {
          return [
            undefined,
            json as InferSuccess<
              InferRoutes<TRoutes>[TQuery]
            >,
          ] as const;
        }

        const message = JSON.stringify(json, null, 2);

        if (res.status === 404) {
          return [
            makeError("NotFound", message),
            undefined,
          ] as const;
        }
        return [
          makeError("Unknown", message),
          undefined,
        ] as const;
      });
  };

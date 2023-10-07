// import {
//   isPlainObject,
//   makeError,
//   fail,
//   ok,
//   makeUnwrapablePromise,
//   tryCatchAsync,
// } from "@nancy/core";
import { HeadersOptions } from "openapi-fetch";

export interface ClientOptions
  extends Omit<RequestInit, "headers"> {
  /** set the common root URL for all API requests */
  baseUrl: string;
  /** custom fetch (defaults to globalThis.fetch) */
  fetch?: typeof fetch;

  headers?: HeadersOptions;
}

export type ClientOptionsish = ClientOptions | string;

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

type Flatten<T extends {}> = {
  [K in keyof T]: {
    [U in keyof T[K]]: U extends string
      ? {
          [P in `${Uppercase<U & string>} ${K &
            string}`]: T[K][U];
        }
      : never;
  }[keyof T[K]];
}[keyof T];
export type NormalizeRoutes<T extends {}> = {
  [K in Flatten<T> as keyof K]: {
    params: InferParams<K[keyof K] & {}>;
    result: InferSuccess<K[keyof K] & {}>;
  };
};

// export const createClientFactory = <
//   TRoutes extends {},
// >() => {
//   type Routes = NormalizeRoutes<TRoutes>;

//   return (clientOptions: ClientOptionsish) => {
//     let { baseUrl, fetch: customFetch = fetch } =
//       typeof clientOptions === "string"
//         ? { baseUrl: clientOptions }
//         : clientOptions;

//     if (baseUrl.endsWith("/")) {
//       baseUrl = baseUrl.slice(0, -1);
//     }

//     return <TQuery extends keyof Routes & string>(
//       query: TQuery,
//       params: Routes[TQuery]["params"] & {
//         init?: RequestInit;
//       },
//     ) =>
//       makeUnwrapablePromise(async () => {
//         let [method = "GET", pathname = ""] =
//           query.split(" ");

//         if (
//           isPlainObject(params) &&
//           "path" in params &&
//           isPlainObject(params.path)
//         ) {
//           for (const [key, value] of Object.entries(
//             params.path,
//           )) {
//             pathname = pathname.replace(
//               new RegExp(`{${key}}`, "g"),
//               String(value),
//             );
//           }
//         }
//         const url = new URL(baseUrl + pathname);

//         if (
//           isPlainObject(params) &&
//           "query" in params &&
//           isPlainObject(params.query)
//         ) {
//           for (const [key, value] of Object.entries(
//             params.query,
//           )) {
//             if (!value) continue;
//             url.searchParams.set(
//               key,
//               encodeURIComponent(String(value)),
//             );
//           }
//         }
//         const [networkError, res] = await tryCatchAsync(
//           () =>
//             customFetch(url, {
//               method,
//               body:
//                 isPlainObject(params) && "body" in params
//                   ? JSON.stringify(params.body)
//                   : undefined,
//               ...(params.init ?? {}),
//             }),
//         );

//         if (networkError) {
//           return fail(
//             makeError(
//               "NetworkError",
//               networkError.message,
//               {
//                 cause: networkError,
//               },
//             ),
//           );
//         }
//         const [parseError, json] = await tryCatchAsync(() =>
//           res.json(),
//         );

//         if (parseError) {
//           return fail(
//             makeError(
//               "FailedToParseResponse",
//               parseError.message,
//               {
//                 cause: parseError,
//               },
//             ),
//           );
//         }

//         if (res.ok) {
//           const response = json as Routes[TQuery]["result"];
//           return ok(response);
//         }

//         const message = JSON.stringify(json, null, 2);

//         if (res.status === 404) {
//           return fail(makeError("NotFound", message));
//         }

//         return fail(makeError("Unknown", message));
//       });
//   };
// };

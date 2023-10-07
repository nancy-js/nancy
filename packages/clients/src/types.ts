export interface ClientOptions
  extends Omit<RequestInit, "headers"> {
  /** set the common root URL for all API requests */
  baseUrl: string;
  /** custom fetch (defaults to globalThis.fetch) */
  fetch?: typeof fetch;

  headers?: HeadersInit;
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

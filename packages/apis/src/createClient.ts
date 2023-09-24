import createOpenapiFetchClient, {
  HeadersOptions,
} from "openapi-fetch";

export interface ClientOptions
  extends Omit<
    RequestInit,
    "headers"
  > {
  /** set the common root URL for all API requests */
  baseUrl?: string;
  /** custom fetch (defaults to globalThis.fetch) */
  fetch?: typeof fetch;

  headers?: HeadersOptions;
}

export function createClient<
  Paths extends {}
>() {
  return (
    clientOptions?:
      | ClientOptions
      | string
  ) =>
    createOpenapiFetchClient<Paths>(
      typeof clientOptions ===
        "string"
        ? {
            baseUrl:
              clientOptions,
          }
        : clientOptions
    );
}

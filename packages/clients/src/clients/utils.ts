import { Chain, Config } from "./types.js";
import { R, tryCatchAsync } from "@nancyjs/core";

type Nullable<T> = T | null;
export const resolveChainConfig = async (
  config: Config,
  chainKey: string
): Promise<Nullable<Chain>> => {
  const chain = await config.chains[chainKey];
  if (!chain) return null;
  if (typeof chain === "function") {
    const mod = await chain();
    if ("default" in mod) return mod.default as Chain;
    return mod;
  }
  return chain;
};
export const mergeUrl = (
  ...parts: (string | undefined)[]
) => {
  return parts
    .map((part) => part?.replace(/\/$/, "") ?? "")
    .filter(Boolean)
    .join("/");
};
const parseResponse = async <T>(response: Response) => {
  const [error, json] = await tryCatchAsync(() =>
    response.json()
  );
  if (error) {
    return R.failWith("ParseError", error.message, {
      cause: error,
    });
  }
  return R.ok(json as T);
};
export const request = async <T>(
  url: string,
  init?: RequestInit
) => {
  const [error, response] = await tryCatchAsync(() =>
    fetch(url, init)
  );
  if (error) {
    return R.failWith("NetworkError", error.message, {
      cause: error,
    });
  }
  if (response.ok) {
    return await parseResponse<T>(response);
  }
  if (response.status === 404) {
    return R.failWith("NotFound", await response.text());
  }

  if (response.status === 500) {
    return R.failWith("ServerError", await response.text());
  }
  return R.failWith("UnknownError", await response.text());
};
export const mergeRequestInit = (
  ...inits: RequestInit[]
) => {
  return inits.reduce(
    (acc, init) => ({
      ...acc,
      ...init,
      headers: {
        ...acc.headers,
        ...init.headers,
      },
    }),
    {}
  );
};
export const interpolateUrl = (
  baseUrl: string,
  params: Record<string, string>,
  query: Record<string, string> = {}
) => {
  const url = Object.entries(params).reduce(
    (acc, [key, value]) =>
      acc.replace(new RegExp(`{${key}}`, "g"), value),
    baseUrl
  );
  console.log(url, params);
  const urlObject = new URL(url);
  for (const [key, value] of Object.entries(query)) {
    urlObject.searchParams.set(key, value);
  }
  return urlObject.toString();
};

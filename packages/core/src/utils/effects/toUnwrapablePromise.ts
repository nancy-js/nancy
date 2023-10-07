import { makeError } from "../error-handling/makeError.js";
import { Fail, Result, fail, ok } from "./result.js";
import { toUnwrapable } from "./toUnwrapable.js";
export interface UnwrapablePromise<TErr, TOk>
  extends Promise<Result<TErr, TOk>> {
  unwrap(): Promise<TOk>;
  unwrapOr<T>(
    fallback: T | ((error: TErr) => T),
  ): Promise<TOk | T>;
}

export const toUnwrapablePromise = <TErr, TOk>(
  promise: Promise<Result<TErr, TOk>>,
): UnwrapablePromise<TErr, TOk> => {
  return Object.assign(promise, {
    async unwrap(): Promise<TOk> {
      return toUnwrapable(await promise).unwrap();
    },
    async unwrapOr<T>(
      fallback: T | ((error: TErr) => T),
    ): Promise<TOk | T> {
      return toUnwrapable(await promise).unwrapOr(fallback);
    },
  }) as UnwrapablePromise<TErr, TOk>;
};

export const makeUnwrapablePromise = <
  T extends Result<{}, any>,
>(
  fn: () => Promise<T>,
) =>
  toUnwrapablePromise(fn()) as UnwrapablePromise<
    T extends Fail<{}> ? T[0] : never,
    T extends Fail<{}> ? never : T[1]
  >;

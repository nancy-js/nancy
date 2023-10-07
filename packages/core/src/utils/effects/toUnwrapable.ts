import { Result, isFail } from "./result.js";

export type UnwrapableResult<TErr, TOk> = {
  unwrap(): TOk;
  unwrapOr<T>(fallback: T | ((error: TErr) => T)): TOk | T;
} & Result<TErr, TOk>;

export const toUnwrapable = <TErr, TOk>(
  result: Result<TErr, TOk>,
): UnwrapableResult<TErr, TOk> => {
  return Object.assign([...result] as Result<TErr, TOk>, {
    unwrap(): TOk {
      if (isFail(result)) {
        throw result[0];
      }
      return result[1];
    },

    unwrapOr<T>(
      fallback: T | ((error: TErr) => T),
    ): TOk | T {
      if (isFail(result)) {
        if (typeof fallback === "function") {
          return (fallback as (error: TErr) => T)(
            result[0],
          );
        }
        return fallback;
      }
      return result[1];
    },
  }) as UnwrapableResult<TErr, TOk>;
};

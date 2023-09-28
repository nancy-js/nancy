export type Defined<T> = T extends undefined ? never : T;
export type Result<TResult, TError = Error> = Readonly<
  [undefined, TResult] | [TError, undefined]
>;
export type UnwrapableResult<TResult, TError> = Result<
  TResult,
  TError
> & {
  unwrap(overwriteError?: any): Defined<TResult>;
  unwrapOr<T>(fallback: T): Defined<TResult> | T;
};

export function makeResult<TResult, TError>(
  ...[error, result]:
    | [error: null | undefined, result: TResult]
    | [error: TError, result: null | undefined]
) {
  const out = [error, result] as Result<TResult, TError>;

  return {
    ...out,
    unwrap(overwriteError?: any) {
      if (error) {
        throw overwriteError ?? error;
      }

      return result;
    },
    unwrapOr<T>(fallback: T) {
      if (typeof result === "undefined") {
        return fallback;
      }
      return result;
    },
  } as UnwrapableResult<TResult, TError>;
}

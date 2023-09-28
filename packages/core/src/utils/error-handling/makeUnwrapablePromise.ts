import { Result, Defined } from "./makeResult.js";
export const makeUnwrapablePromise = <
  TResult extends Result<any, any>,
>(
  fn: () => Promise<TResult>,
) => {
  const result = fn() as Promise<TResult> & {
    unwrap(): Promise<
      TResult extends readonly [any, infer U]
        ? U extends undefined
          ? never
          : U
        : never
    >;
  };

  result.unwrap = () =>
    result.then(([error, success]) => {
      if (error) {
        throw error;
      }
      return success;
    });

  return result;
};

export type InferErrors<
  T extends (
    ...args: any[]
  ) => Promise<Result<unknown, unknown>>,
> = T extends (
  ...args: any[]
) => Promise<Result<unknown, infer U>>
  ? U & {}
  : never;

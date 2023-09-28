import { ensureError } from "./ensureError.js";
import { Result } from "./makeResult.js";

export function tryCatch<
  TResult extends
    Promise<any>,
>(
  fn: () => TResult,
): Promise<
  Result<
    Awaited<TResult>,
    Error
  >
>;
export function tryCatch<
  TResult,
>(
  fn: () => TResult,
): Result<TResult, Error>;
export function tryCatch<
  TResult,
>(fn: () => TResult) {
  try {
    const result = fn();
    if (
      result instanceof
      Promise
    ) {
      return result
        .then(
          (result) =>
            [
              undefined,
              result,
            ] as const,
        )
        .catch((error) => {
          return [
            ensureError(
              error,
            ),
            undefined,
          ] as const;
        });
    }
    return [
      undefined,
      fn(),
    ] as const;
  } catch (error) {
    return [
      ensureError(error),
      undefined,
    ] as const;
  }
}

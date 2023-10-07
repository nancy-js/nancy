import { ensureError } from "../error-handling/ensureError.js";
import { Result, fail, ok } from "./result.js";

export const tryCatch = <TOk, TErr extends Error>(
  fn: () => TOk,
): Result<TErr, TOk> => {
  try {
    return ok(fn());
  } catch (error) {
    return fail(ensureError(error) as TErr);
  }
};

export const tryCatchAsync = <TOk, TErr extends Error>(
  fn: () => Promise<TOk>,
): Promise<Result<TErr, TOk>> => {
  return fn()
    .then(ok)
    .catch((error) =>
      Promise.resolve(fail(ensureError(error) as TErr)),
    );
};

import { Result, fail, ok } from "../effects/result.js";
import { ensureError } from "./ensureError.js";

export const tryCatch = <
  TOk extends {},
  TErr extends Error,
>(
  fn: () => TOk,
): Result<TErr, TOk> => {
  try {
    return ok(fn());
  } catch (error) {
    return fail(ensureError(error) as TErr);
  }
};

export const tryCatchAsync = <
  TOk extends {},
  TErr extends Error,
>(
  fn: () => Promise<TOk>,
): Promise<Result<TErr, TOk>> => {
  return fn()
    .then(ok)
    .catch((error) =>
      Promise.resolve(fail(ensureError(error) as TErr)),
    );
};

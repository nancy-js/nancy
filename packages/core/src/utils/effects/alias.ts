import {
  CommonErrors,
  makeError,
} from "../error-handling/makeError.js";
import { fail, ok } from "./result.js";

export const R = {
  ok,
  fail,
  failWith: <T extends CommonErrors | (string & {})>(
    name: T,
    message: string,
    options?: ErrorOptions,
  ) => fail(makeError(name, message, options)),
};

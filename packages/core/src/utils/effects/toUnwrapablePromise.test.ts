import { describe, test, expect } from "bun:test";
import { fail, ok } from "./result.js";
import { toUnwrapablePromise } from "./toUnwrapablePromise.js";

describe("toUnwrapablePromise", () => {
  describe("unwrap", () => {
    test("returns the success value", async () => {
      const unwrappable = toUnwrapablePromise(
        Promise.resolve(ok("foo")),
      );
      expect(await unwrappable.unwrap()).toBe("foo");
    });

    test("throws the error value", async () => {
      const unwrappable = toUnwrapablePromise(
        Promise.resolve(
          fail(new Error("Something went wrong")),
        ),
      );
      expect(() => unwrappable.unwrap()).toThrow(
        "Something went wrong",
      );
    });
  });
});

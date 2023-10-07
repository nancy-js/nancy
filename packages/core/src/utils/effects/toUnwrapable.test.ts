import { describe, test, expect } from "bun:test";
import { toUnwrapable } from "./toUnwrapable.js";
import { fail, ok } from "./result.js";

describe("toUnwrapable", () => {
  describe("unwrap", () => {
    test("returns the success value", () => {
      const unwrappable = toUnwrapable(ok("foo"));
      expect(unwrappable.unwrap()).toBe("foo");
    });

    test("throws the error value", () => {
      const unwrappable = toUnwrapable(
        fail(new Error("Something went wrong")),
      );
      expect(() => unwrappable.unwrap()).toThrow(
        "Something went wrong",
      );
    });
  });

  describe("unwrapOr", () => {
    test("returns the success value", () => {
      const unwrappable = toUnwrapable(ok("foo"));
      expect(unwrappable.unwrapOr("bar")).toBe("foo");
    });

    test("returns the fallback value", () => {
      const unwrappable = toUnwrapable(
        fail(new Error("Something went wrong")),
      );
      expect(unwrappable.unwrapOr("bar")).toBe("bar");
    });

    test("returns the fallback value from a function", () => {
      const unwrappable = toUnwrapable(
        fail(new Error("Something went wrong")),
      );
      expect(
        unwrappable.unwrapOr((err) => err.message),
      ).toBe("Something went wrong");
    });
  });
});

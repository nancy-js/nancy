import { beforeEach, describe, expect, it } from "bun:test";
import { createConfig } from "../createConfig.js";

import { stat, rm } from "fs/promises";
import path from "path";

import { init } from "../init/init.js";
import { addGenesisAccount } from "../genesis/add-genesis-account.js";
import { keysAdd } from "./add.js";

describe("keys add", () => {
  const config = createConfig({
    executablePath: "nancyd",
    chainId: "nancy",
    keyringBackend: "test",
  });
  beforeEach(async () => {
    await rm(config.defaultArgs.home, { recursive: true });
  });
  it("should add account", async () => {
    const newKey = await keysAdd(config, "frida", {
      recover:
        "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
    });

    expect(newKey).toEqual({
      name: "frida",
      address:
        "nancy1dd6psq88kntuzyap944et8fmh0mxmw2wlscqve",
      pubkey: {
        "@type": "/cosmos.crypto.secp256k1.PubKey",
        key: "AxyvM3mJUGQyn3qM6cV1EPx+LMQ+K9Pbv7O1j4ICgJZ6",
      },
      type: "local",
    });
  });

  it("should fail if try to add the same key twice", async () => {
    await keysAdd(config, "frida", {
      recover:
        "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
    });
    expect(() =>
      keysAdd(config, "frid", {
        recover:
          "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
      })
    ).toThrow();
  });
});

import { beforeEach, describe, expect, it } from "bun:test";
import { createConfig } from "../createConfig.js";

import { stat, rm } from "fs/promises";
import path from "path";

import { init } from "../init/init.js";
import { addGenesisAccount } from "./add-genesis-account.js";
import { gentx } from "./gentx.js";
import { keysAdd } from "../keys/add.js";

describe("gentx", () => {
  const config = createConfig({
    executablePath: "nancyd",
    chainId: "nancy",
    keyringBackend: "test",
  });
  beforeEach(async () => {
    await rm(config.defaultArgs.home, { recursive: true });
    await init(config, {
      logLevel: "debug",
      defaultDenom: "frida",
      overwrite: true,
      recover:
        "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
    });
  });
  it("should initialize a new node", async () => {
    const { address } = await keysAdd(config, "frida", {
      recover:
        "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
    });
    await addGenesisAccount(
      config,
      "frida",
      ["100000frida"],
      {}
    );
    console.log(
      await gentx(config, "frida", "100000frida", {})
    );
  });
});

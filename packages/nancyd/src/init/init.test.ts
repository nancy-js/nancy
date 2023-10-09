import { beforeEach, describe, expect, it } from "bun:test";
import { createConfig } from "../createConfig.js";
import { init } from "./init.js";
import { stat, rm } from "fs/promises";
import path from "path";

describe("init", () => {
  const config = createConfig({
    executablePath: "nancyd",
    chainId: "nancy",
  });
  beforeEach(async () => {
    await rm(config.defaultArgs.home, { recursive: true });
  });
  it("should initialize a new node", async () => {
    const genesisPath = path.join(
      config.defaultArgs.home,
      "config",
      "genesis.json"
    );
    expect(() => stat(genesisPath)).toThrow();

    const response = await init(config, {
      logLevel: "debug",
      defaultDenom: "frida",
      overwrite: true,

      recover:
        "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
    });
    console.log(response);
    expect(
      await stat(path.join(genesisPath))
    ).toBeDefined();
  });
});

import { beforeEach, describe, expect, it } from "bun:test";
import { createConfig } from "../createConfig.js";

import { stat, rm } from "fs/promises";
import path from "path";
import { addGenesisAccount } from "./add-genesis-account.js";
import { init } from "../init/init.js";

describe("addGenesisAccount", () => {
  const config = createConfig({
    executablePath: "nancyd",
    chainId: "nancy",
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
  it("should add genesis account", async () => {
    console.log(
      await addGenesisAccount(
        config,
        "nancy1znlrc5gpl7gpshhn4a9z5r27sz53ds2hmxlnna",
        ["100000frida"],
        {}
      )
    );
  });
});

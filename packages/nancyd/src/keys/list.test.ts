import { beforeEach, describe, expect, it } from "bun:test";
import { createConfig } from "../createConfig.js";

import { stat, rm } from "fs/promises";
import path from "path";

import { init } from "../init/init.js";
import { addGenesisAccount } from "../genesis/add-genesis-account.js";
import { keysList } from "./list.js";
import { keysAdd } from "./add.js";

describe("keys list", () => {
  const config = createConfig({
    executablePath: "nancyd",
    chainId: "nancy",
  });
  beforeEach(async () => {
    await rm(config.defaultArgs.home, { recursive: true });
  });
  it("should initialize a new node", async () => {
    await keysAdd(config, "frida", {
      recover:
        "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
    });
    await keysAdd(config, "lucy", {
      recover:
        "copper push brief egg scan entry inform record adjust fossil boss egg comic alien upon aspect dry avoid interest fury window hint race symptom",
    });

    console.log(config.defaultArgs.home);
    console.log(await keysList(config, {}));
  });
});

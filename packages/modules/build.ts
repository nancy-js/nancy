import {
  devDependencies,
  peerDependencies,
} from "./package.json";

const keys = Object.keys;

const bunResult =
  await Bun.build({
    entrypoints: [
      "./src/index.ts",
    ],

    outdir: "./dist/bun",
    // external: [
    //   ...keys({
    //     ...devDependencies,
    //     ...peerDependencies,
    //   }),
    // ],
  });

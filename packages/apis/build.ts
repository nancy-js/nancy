import {
  devDependencies,
  peerDependencies,
} from "./package.json";

const keys = Object.keys;

await Bun.build({
  entrypoints: [
    "./src/index.ts",
  ],
  outdir: "./dist",
  external: [
    ...keys({
      ...devDependencies,
      ...peerDependencies,
    }),
  ],
});

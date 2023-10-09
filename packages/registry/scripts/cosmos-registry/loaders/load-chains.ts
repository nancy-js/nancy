import { glob } from "glob";
import { CosmosChain } from "../types/chain.js";
import { AssetLists } from "../types/assets.js";
import { IBCData } from "../types/ibc-data.js";
import { all } from "@nancyjs/core";
import { memoize } from "lodash-es";

export const loadFiles = memoize(<T>(globPattern: string) =>
  glob(globPattern).then((paths) =>
    all(paths.map((path) => Bun.file(path).json<T>()))
  )
);

export const loadChains = () =>
  loadFiles<CosmosChain>("./chain-registry/*/chain.json");

export const loadTestnetChains = () =>
  loadFiles<CosmosChain>(
    "./chain-registry/testnets/*/chain.json"
  );

export const loadAssets = () =>
  loadFiles<AssetLists>(
    "./chain-registry/*/assetlist.json"
  );

export const loadTestnetAssets = () =>
  loadFiles<AssetLists>(
    "./chain-registry/testnets/*/assetlist.json"
  );

export const loadIBCData = () =>
  loadFiles<IBCData>("./chain-registry/_IBC/*.json");

export const loadTestnetIBCData = () =>
  loadFiles<IBCData>(
    "./chain-registry/testnets/_IBC/*.json"
  );

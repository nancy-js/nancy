export type Chain = {
  name: string;
  [key: string]: unknown;
};
export interface ChainMap {
  [key: string]:
    | Chain
    | (() => Promise<Chain>)
    | (() => Chain);
}
export interface Config<TChains extends ChainMap> {
  chains: TChains;
}
export const createConfig = <const T extends ChainMap>(
  config: Config<T>,
) => {
  return config;
};

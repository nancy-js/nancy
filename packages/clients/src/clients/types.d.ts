export type Chain = Record<string, unknown>;
export type ChainMap = Readonly<
  Record<
    string,
    | Chain
    | (() =>
        | Chain
        | Promise<Chain>
        | Promise<{ default: Chain }>)
  >
>;

export type Config<T extends ChainMap = ChainMap> = {
  chains: T;
};

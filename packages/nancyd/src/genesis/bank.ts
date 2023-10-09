import { DConfig } from "../createConfig.js";
import Bun from "bun";
import { Amount } from "../utils/types.js";
import { updateGenesis } from "./genesis-crud.js";

const sortCoins = (
  coins: {
    denom: string;
    amount: string;
  }[],
) => {
  return coins.sort((a, b) => {
    if (a.denom < b.denom) {
      return -1;
    }
    if (a.denom > b.denom) {
      return 1;
    }
    return 0;
  });
};
export const bank = {
  addBalance: async (
    config: DConfig,
    address: string,
    coins: Amount[],
  ) => {
    return updateGenesis(config, (genesis) => {
      const account = genesis.app_state.bank.balances.find(
        (b) => b.address === address,
      );

      const parsedCoins = coins.map((coin) => {
        const [, amount, denom] = coin.split(/^(\d+)/g);
        if (!amount || !denom) {
          throw new Error(
            "Invalid coin format, expected {amount}{denom}",
          );
        }
        return {
          amount,
          denom,
        };
      });
      if (!account) {
        genesis.app_state.bank.balances.push({
          address,
          coins: sortCoins(parsedCoins),
        });
        return genesis;
      }

      for (const coin of parsedCoins) {
        const existingCoin = account.coins.find(
          (c) => c.denom === coin.denom,
        );
        if (existingCoin) {
          existingCoin.amount = (
            BigInt(existingCoin.amount) +
            BigInt(coin.amount)
          ).toString();
        } else {
          account.coins.push(coin);
        }
      }
      account.coins = sortCoins(account.coins);
      return genesis;
      // const balances = genesis.app_state.bank.balances;
      // const balance = balances.find((b) => b.address === address);
      // if (balance) {
      //   balance.coins = balance.coins.concat(coins);
      // } else {
      //   balances.push({ address, coins });
      // }
      // return genesis;
    });
  },
};

export const config = {
  chains: {
    nancy: {
      cosmossdk: {
        api: {
          rest: ["http://0.0.0.0:1317"],
        },
      },
    },
  },
} as const;

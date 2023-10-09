"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import cx from "clsx";
import { createCosmosSdkClient } from "@nancyjs/clients";
import { config } from "./config";

export const Rewards = ({
  address,
}: {
  address: `${string}1${string}`;
}) => {
  const { data, isRefetching, dataUpdatedAt } =
    useSuspenseQuery({
      queryKey: ["accountRewards", address],
      refetchInterval: 5000,
      queryFn: () =>
        createCosmosSdkClient(config, "nancy")
          .send(
            "GET /cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards",
            {
              path: {
                delegator_address: address,
              },
            }
          )
          .unwrap(),
    });

  return (
    <pre className={cx({ "animate-pulse": isRefetching })}>
      {JSON.stringify(data, null, 2)}
      {dataUpdatedAt}
    </pre>
  );
};

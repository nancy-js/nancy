"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import cx from "clsx";
import { createCosmosSdkClient } from "@nancyjs/clients";
import { config } from "./config";

export const AccountBalance = ({
  address,
}: {
  address: `${string}1${string}`;
}) => {
  const { data, isRefetching, dataUpdatedAt } =
    useSuspenseQuery({
      queryKey: ["accountBalance", address],
      refetchInterval: 15_000,
      queryFn: () =>
        createCosmosSdkClient(config, "nancy")
          .send(
            "GET /cosmos/bank/v1beta1/balances/{address}",
            {
              path: {
                address: address,
              },
            }
          )
          .unwrap(),
    });

  return (
    <pre className={cx({ "animate-pulse": isRefetching })}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

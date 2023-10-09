"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import cx from "clsx";
import { createCosmosSdkClient } from "@nancyjs/clients";
import { config } from "./config";

export const AccountInfo = ({
  address,
}: {
  address: `${string}1${string}`;
}) => {
  const { data, isRefetching, dataUpdatedAt } =
    useSuspenseQuery({
      queryKey: ["accountInfo", address],

      queryFn: () =>
        createCosmosSdkClient(config, "nancy")
          .send(
            "GET /cosmos/auth/v1beta1/account_info/{address}",
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

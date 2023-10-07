import type { EvmJSONRPCMethods } from "./evm-types.js";

export type EVMRouteMap = {
  [TMethod in keyof EvmJSONRPCMethods]: {
    params: EvmJSONRPCMethods[TMethod]["params"];
    result: {
      jsonrpc: "2.0";
      id: number;
      result: EvmJSONRPCMethods[TMethod]["result"];
    };
    errors: EvmJSONRPCMethods[TMethod] extends {
      errors: infer U;
    }
      ? U
      : undefined;
  };
};

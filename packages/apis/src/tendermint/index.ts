// https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/client/docs/swagger-ui/swagger.yaml

import { createClientFactory } from "../createClient.js";
import type { paths } from "./openapi-types.js";

export const makeTendermintClient =
  createClientFactory<paths>();

export type TendermintClient = ReturnType<
  typeof makeTendermintClient
>;

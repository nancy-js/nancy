// https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/client/docs/swagger-ui/swagger.yaml

import { createClient } from "../createClient.ts";
import type { paths } from "./openapi-types.ts";

export const makeTendermintClient =
  createClient<paths>();

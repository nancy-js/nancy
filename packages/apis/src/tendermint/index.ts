// https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/client/docs/swagger-ui/swagger.yaml

import {
  NormalizeRoutes,
  // createClientFactory,
} from "../createClient.js";
import type { paths } from "./openapi-types.js";

// export const makeTendermintApiClient =
//   createClientFactory<paths>();

// export type TendermintClient = ReturnType<
//   typeof makeTendermintApiClient
// >;

export type TendermintRouteMap = NormalizeRoutes<paths>;

// https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/client/docs/swagger-ui/swagger.yaml

import {
  NormalizeRoutes,
  // createClientFactory,
} from "../createClient.js";

import type { paths } from "./openapi-types.js";

// export const makeCosmosSDKApiClient: ReturnType<
//   typeof createClientFactory<paths>
// > = createClientFactory<paths>();

// export type CosmosSDKClient = ReturnType<
//   ReturnType<typeof createClientFactory<paths>>
// >;

export type CosmosRouteMap = NormalizeRoutes<paths>;

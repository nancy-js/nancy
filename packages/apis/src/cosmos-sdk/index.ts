// https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/client/docs/swagger-ui/swagger.yaml

import { createClientFactory } from "../createClient.js";

import type { paths } from "./openapi-types.js";

export const makeCosmosSDKClient: ReturnType<
  typeof createClientFactory<paths>
> = createClientFactory<paths>();

export type CosmosSDKClient = ReturnType<
  ReturnType<typeof createClientFactory<paths>>
>;

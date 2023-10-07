// https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/client/docs/swagger-ui/swagger.yaml

import { NormalizeRoutes } from "../types.js";
import type { paths } from "./openapi-types.js";

export type TendermintRouteMap = NormalizeRoutes<paths>;

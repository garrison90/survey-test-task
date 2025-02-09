import { ENV_VARIABLES } from "@/constants/ENV_VARIABLES";

import { EndpointsType } from "@/types/EndpointsType";

export const createApiUrl = (endpoint: EndpointsType) => `${ENV_VARIABLES.BASE_URL}/api/${endpoint}`;

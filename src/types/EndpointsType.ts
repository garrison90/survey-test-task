import { ENDPOINTS } from "@/constants/ENDPOINTS";

export type EndpointsType = (typeof ENDPOINTS)[keyof typeof ENDPOINTS];

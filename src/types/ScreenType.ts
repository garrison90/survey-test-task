import { SCREEN_TYPE } from "@/constants/SCREEN_TYPE";

export type ScreenType = (typeof SCREEN_TYPE)[keyof typeof SCREEN_TYPE];

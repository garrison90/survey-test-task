import { SURVEY_FILE_NAME } from "@/constants/SURVEY_FILE_NAME";

export type SurveyFileName = (typeof SURVEY_FILE_NAME)[keyof typeof SURVEY_FILE_NAME];

import { SurveyQuestionPageDataType } from "@/types/SurveyQuestionPageDataType";

export type SurveyQuestionsType = {
  initPageName: string;
  pages: Record<string, SurveyQuestionPageDataType>;
};

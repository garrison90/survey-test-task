import { SurveyQuestionPageDataType } from "@/types/SurveyQuestionPageDataType";

export type HeaderBackIconComponentProps = {
  backIconColor: React.CSSProperties["backgroundColor"];
  showBackIcon: boolean;
} & Pick<SurveyQuestionPageDataType, "pageName">;

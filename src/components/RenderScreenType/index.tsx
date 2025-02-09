import InfoScreen from "@/components/InfoScreen";
import SingleSelectScreen from "@/components/SingleSelectScreen";

import { SCREEN_TYPE } from "@/constants/SCREEN_TYPE";

import { SurveyQuestionPageDataType } from "@/types/SurveyQuestionPageDataType";

type Props = {
  pageData: SurveyQuestionPageDataType;
};

const RenderScreenType = ({ pageData }: Props) => {
  const { screenType } = pageData;

  switch (screenType) {
    case SCREEN_TYPE.SINGLE_SELECT:
      return <SingleSelectScreen pageData={pageData} />;

    case SCREEN_TYPE.INFO:
      return <InfoScreen pageData={pageData} />;
    default:
      console.warn("Please provide appropriate screenType property");
      return null;
  }
};

export default RenderScreenType;

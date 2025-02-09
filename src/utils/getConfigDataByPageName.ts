import getConfigData from "@/utils/getConfigData";

import { SurveyQuestionPageDataType } from "@/types/SurveyQuestionPageDataType";

const getConfigDataByPageName = async (
  pageName: string
): Promise<{ pageData: SurveyQuestionPageDataType; initPageName: string }> => {
  const config = await getConfigData();

  return { pageData: config.pages[pageName], initPageName: config.initPageName };
};

export default getConfigDataByPageName;

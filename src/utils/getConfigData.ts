import fs from "fs/promises";
import path from "path";

import { SURVEY_FILE_NAME } from "@/constants/SURVEY_FILE_NAME";

import { SurveyQuestionsType } from "@/types/SurveyQuestionsType";

const getConfigData = async (surveyFileName = SURVEY_FILE_NAME.TEST_SURVEY): Promise<SurveyQuestionsType> => {
  const filePath = path.join(process.cwd(), "src", "surveyConfigs", `${surveyFileName}.json`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const config = JSON.parse(fileContents);

  return config;
};

export default getConfigData;

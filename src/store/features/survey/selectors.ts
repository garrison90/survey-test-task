import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";

import { SurveyQuestionPageDataType } from "@/types/SurveyQuestionPageDataType";

export const selectSurveyQuestions = (state: RootState) => state.survey.surveyQuestions;

export const selectAnswers = (state: RootState) => state.survey.answers;

export const selectSurveyQuestionPageData = (pageName: string | null) =>
  createSelector(selectSurveyQuestions, (state) => {
    if (!pageName || !Object.hasOwn(state, "pages")) return {} as SurveyQuestionPageDataType;

    return state.pages[pageName];
  });

export const selectAnswerByDataKey = (dataKey: string) =>
  createSelector(selectAnswers, (state) => {
    const fallback = { value: "" };

    if (Object.hasOwn(state, dataKey)) {
      return state[dataKey] || fallback;
    }

    return fallback;
  });

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SurveyQuestionsType } from "@/types/SurveyQuestionsType";

type Answer = {
  pageTitle: string;
  value: string;
  pageName: string;
  tokenizedValue?: string;
};

type SurveyState = {
  answers: Record<string, Answer | undefined>;
  surveyQuestions: SurveyQuestionsType;
};

const initialState: SurveyState = {
  answers: {},
  surveyQuestions: {
    initPageName: "",
    pages: {},
  },
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<Answer>) => {
      const { payload } = action;

      const answerKey = payload.pageName;

      state.answers[answerKey] = payload;
    },

    setSurveyQuestions: (state, action: PayloadAction<SurveyQuestionsType>) => {
      state.surveyQuestions = action.payload;
    },

    clearAnswerByPageName: (state, action: PayloadAction<Pick<Answer, "pageName">>) => {
      const { payload } = action;
      const answerKey = payload.pageName;
      delete state.answers[answerKey];
    },

    clearSurveySliceData: (state) => {
      state.answers = initialState.answers;
      state.surveyQuestions = initialState.surveyQuestions;
    },
  },
});

export const { clearAnswerByPageName, clearSurveySliceData, saveAnswer, setSurveyQuestions } = surveySlice.actions;

export default surveySlice.reducer;

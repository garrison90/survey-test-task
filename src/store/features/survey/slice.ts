import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

    clearSurveyAnswersData: (state) => {
      state.answers = initialState.answers;
    },
  },
});

export const { clearAnswerByPageName, clearSurveyAnswersData, saveAnswer, setSurveyQuestions } = surveySlice.actions;

const persistConfig = {
  key: "survey",
  storage,
};

export default persistReducer(persistConfig, surveySlice.reducer);

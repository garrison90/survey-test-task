import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from "@/store/features/survey/slice";

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const makeStore = () => store;

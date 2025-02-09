"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setSurveyQuestions } from "@/store/features/survey/slice";

import { ENDPOINTS } from "@/constants/ENDPOINTS";
import { createApiUrl } from "@/utils/createApiUrl";

const ClientSurveyDataProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSurveyConfigData = async () => {
      const endpoint = createApiUrl(ENDPOINTS.SURVEY_CONFIG);
      const response = await fetch(endpoint);
      const config = await response.json();

      dispatch(setSurveyQuestions(config));
    };

    getSurveyConfigData();
  }, [dispatch]);

  return null;
};

export default ClientSurveyDataProvider;

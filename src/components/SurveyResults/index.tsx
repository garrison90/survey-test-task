"use client";
import { useSelector } from "react-redux";

import { selectAnswers } from "@/store/features/survey/selectors";

import sm from "./styles.module.scss";

const SurveyResults = () => {
  const answers = useSelector(selectAnswers);

  const answersData = Object.values(answers);

  return (
    <section className={sm.Section}>
      {answersData.map((item) => (
        <div key={item?.pageName}>
          <h3>{item?.pageTitle}</h3>
          <p>{item?.value}</p>
        </div>
      ))}
    </section>
  );
};

export default SurveyResults;

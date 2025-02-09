"use client";

import useSurveyResults from "@/components/SurveyResults/hooks/useSurveyResults";

import sm from "./styles.module.scss";

const SurveyResults = () => {
  const { answersData, handleResetClick } = useSurveyResults();

  return (
    <section className={sm.Section}>
      {answersData.map((item) => (
        <div key={item?.pageName}>
          <h3>{item?.pageTitle}</h3>
          <p>{item?.value}</p>
        </div>
      ))}
      <button type="button" className={sm.Button} onClick={handleResetClick}>
        Reset
      </button>
    </section>
  );
};

export default SurveyResults;

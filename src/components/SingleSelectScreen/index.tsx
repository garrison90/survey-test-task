"use client";

import Header from "@/components/ui/Header";
import HeaderBackIcon from "@/components/ui/HeaderBackIcon";
import HeaderMainIcon from "@/components/ui/HeaderMainIcon";
import SingleSelectOption from "@/components/ui/SingleSelectOption";

import useReplacePageTitleValue from "@/hooks/useReplacePageTitleValue";

import { SurveyQuestionPageDataType } from "@/types/SurveyQuestionPageDataType";

import sm from "./styles.module.scss";

type Props = {
  pageData: Extract<SurveyQuestionPageDataType, { screenType: "single_select" }>;
};

const SingleSelectScreen = ({ pageData }: Props) => {
  const { pageContent, pageName } = pageData;

  const { backgroundColor, header, title, options, description, tokens } = pageContent || {};

  const replacedTitle = useReplacePageTitleValue({ title, tokens });

  return (
    <div
      className={sm.Wrapper}
      style={
        {
          ["--backgroundColor"]: backgroundColor,
        } as React.CSSProperties
      }
    >
      <Header
        mainIcon={<HeaderMainIcon mainIconVariant={header.mainIconVariant} />}
        backIcon={
          <HeaderBackIcon backIconColor={header.backIconColor} pageName={pageName} showBackIcon={header.showBackIcon} />
        }
      />
      <section className={sm.Section}>
        <div className={sm.Content}>
          <h1 className={sm.Title}>{replacedTitle}</h1>
          {description && <h2 className={sm.Description}>{description}</h2>}
          <div className={sm.Options}>
            {options.map((option) => (
              <SingleSelectOption key={option.value} option={option} pageTitle={replacedTitle} pageName={pageName} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleSelectScreen;

import SurveyResults from "@/components/SurveyResults";
import Header from "@/components/ui/Header";
import HeaderBackIcon from "@/components/ui/HeaderBackIcon";
import HeaderMainIcon from "@/components/ui/HeaderMainIcon";
import InfoOption from "@/components/ui/InfoOption";

import { SurveyQuestionPageDataType } from "@/types/SurveyQuestionPageDataType";

import sm from "./styles.module.scss";

type Props = {
  pageData: Extract<SurveyQuestionPageDataType, { screenType: "info" }>;
};

const InfoScreen = ({ pageData }: Props) => {
  const { pageContent, pageName, nextPageName } = pageData;

  const { background, header, title, description, options } = pageContent;

  return (
    <div
      className={sm.Wrapper}
      style={
        {
          ["--background"]: background,
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
          <h1 className={sm.Title}>{title}</h1>
          <h2 className={sm.Description}>{description}</h2>
          <div>
            {options.map((option) => (
              <InfoOption key={option.label} option={option} pageTitle={title} pageName={pageName} />
            ))}
          </div>
        </div>
      </section>
      <section>{!nextPageName && <SurveyResults />}</section>
    </div>
  );
};

export default InfoScreen;

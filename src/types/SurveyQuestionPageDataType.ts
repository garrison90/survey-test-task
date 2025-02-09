import { MainIconVariantType } from "@/types/MainIconVariantType";
import { OptionType } from "@/types/OptionType";

type Header = {
  mainIconVariant: MainIconVariantType;
  showBackIcon: boolean;
  backIconColor: string;
};

type SeparateFlowOptionType = { value: string; nextPageName: string };

type PageContent = {
  title: string;
  description?: string;
  header: Header;
  options: OptionType[];
};

type SingleSelectScreenPageData = {
  screenType: "single_select";
  pageContent: PageContent & {
    backgroundColor: string;
    tokens?: Record<string, string>;
  };
};

type InfoScreenPageData = {
  screenType: "info";
  pageContent: PageContent & {
    background: string;
  };
};

type SeparateFlowPageData = {
  screenType: "separate_flow";
};

export type SurveyQuestionPageDataType = {
  prevPageName: string | null;
  pageName: string;
  nextPageName: string | null;
  dataKey?: string;
  conditions?: SeparateFlowOptionType[];
} & (SingleSelectScreenPageData | InfoScreenPageData | SeparateFlowPageData);

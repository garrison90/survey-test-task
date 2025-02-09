import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { selectAnswerByDataKey, selectSurveyQuestionPageData } from "@/store/features/survey/selectors";
import { saveAnswer } from "@/store/features/survey/slice";

import { SCREEN_TYPE } from "@/constants/SCREEN_TYPE";

import { OptionComponentProps } from "@/types/OptionComponentProps";

const useNavigateToNextPage = ({ option, pageTitle, pageName }: OptionComponentProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { value, tokenizedValue } = option || {};

  const pageData = useSelector(selectSurveyQuestionPageData(pageName));

  const { nextPageName = "", screenType } = pageData || {};

  const nextPageData = useSelector(selectSurveyQuestionPageData(nextPageName));

  const { conditions = [], dataKey = "", screenType: nextScreenType } = nextPageData || {};

  const answerDataKey = useSelector(selectAnswerByDataKey(dataKey));

  const updateStore = () => {
    const isInfoScreenType = screenType === SCREEN_TYPE.INFO;

    if (isInfoScreenType) return;

    dispatch(saveAnswer({ pageTitle, value, pageName, tokenizedValue }));
  };

  const matchSeparateFlow = (input?: string) => {
    if (!input) return;

    const foundCondition = conditions.find((condition) => condition.value === input);

    if (foundCondition) {
      router.push(`/${foundCondition.nextPageName}`);
    }
  };

  return () => {
    updateStore();

    if (nextScreenType === SCREEN_TYPE.SEPARATE_FLOW) {
      if (dataKey === pageName) {
        matchSeparateFlow(value);
      } else {
        const selectedDataKeyValue = answerDataKey?.value;

        matchSeparateFlow(selectedDataKeyValue);
      }
    } else {
      router.push(`/${nextPageName}`);
    }
  };
};

export default useNavigateToNextPage;

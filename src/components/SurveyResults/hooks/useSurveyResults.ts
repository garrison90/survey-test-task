import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { selectAnswers } from "@/store/features/survey/selectors";
import { clearSurveyAnswersData } from "@/store/features/survey/slice";

const useSurveyResults = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const answers = useSelector(selectAnswers);

  const answersData = Object.values(answers);

  const handleResetClick = () => {
    dispatch(clearSurveyAnswersData());
    router.push("/");
  };

  return { answersData, handleResetClick };
};

export default useSurveyResults;

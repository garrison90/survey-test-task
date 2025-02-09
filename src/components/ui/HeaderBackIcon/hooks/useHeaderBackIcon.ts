import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { HeaderBackIconComponentProps } from "@/components/ui/HeaderBackIcon/types/HeaderBackIconComponentProps";

import { clearAnswerByPageName } from "@/store/features/survey/slice";

const useHeaderBackIcon = ({ pageName }: Pick<HeaderBackIconComponentProps, "pageName">) => {
  const router = useRouter();

  const dispatch = useDispatch();

  return () => {
    dispatch(clearAnswerByPageName({ pageName }));

    router.back();
  };
};

export default useHeaderBackIcon;

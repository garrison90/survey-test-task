import { useEffect, useState } from "react";

import { getTokenReplacements } from "@/utils/getTokenReplacements";
import { replaceTitleWithTokenizedValues } from "@/utils/replaceTitleWithTokenizedValues";

type Props = {
  title: string;
  tokens?: Record<string, string>;
};

const useReplacePageTitleValue = ({ title, tokens }: Props) => {
  const [pageTitle, setPageTitle] = useState(title);

  useEffect(() => {
    const replacements = getTokenReplacements(tokens);

    const replacedTitle = replaceTitleWithTokenizedValues(title, replacements);

    setPageTitle(replacedTitle);
  }, [title, tokens]);

  return pageTitle;
};

export default useReplacePageTitleValue;

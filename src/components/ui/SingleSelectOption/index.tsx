"use client";

import useNavigateToNextPage from "@/hooks/useNavigateToNextPage";

import { OptionComponentProps } from "@/types/OptionComponentProps";

import sm from "./styles.module.scss";

const SingleSelectOption = ({ option, pageTitle, pageName }: OptionComponentProps) => {
  const { label } = option;

  const handleOptionClick = useNavigateToNextPage({ option, pageName, pageTitle });

  return (
    <button type="button" className={sm.Button} onClick={handleOptionClick}>
      {label}
    </button>
  );
};

export default SingleSelectOption;

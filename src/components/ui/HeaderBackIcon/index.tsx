"use client";

import useHeaderBackIcon from "@/components/ui/HeaderBackIcon/hooks/useHeaderBackIcon";
import { HeaderBackIconComponentProps } from "@/components/ui/HeaderBackIcon/types/HeaderBackIconComponentProps";

import BackArrowIcon from "@/assets/icons/svg/backArrowIcon.svg";

import sm from "./styles.module.scss";

const HeaderBackIcon = ({ backIconColor, pageName, showBackIcon }: HeaderBackIconComponentProps) => {
  const handleOnClick = useHeaderBackIcon({ pageName });

  if (!showBackIcon) return null;

  return (
    <button type="button" className={sm.BackButton} onClick={handleOnClick}>
      <BackArrowIcon color={backIconColor} />
    </button>
  );
};

export default HeaderBackIcon;

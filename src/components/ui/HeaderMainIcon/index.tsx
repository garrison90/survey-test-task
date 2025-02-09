import BlackMainIcon from "@/assets/icons/svg/blackMainIcon.svg";
import WhiteMainIcon from "@/assets/icons/svg/whiteMainIcon.svg";

import { MAIN_ICON_VARIANT } from "@/constants/MAIN_ICON_VARIANT";

import { MainIconVariantType } from "@/types/MainIconVariantType";

type Props = Readonly<{
  mainIconVariant: MainIconVariantType;
}>;

const HeaderMainIcon = ({ mainIconVariant }: Props) => {
  switch (mainIconVariant) {
    case MAIN_ICON_VARIANT.BLACK:
      return <BlackMainIcon />;
    case MAIN_ICON_VARIANT.WHITE:
      return <WhiteMainIcon />;
    default:
      return null;
  }
};

export default HeaderMainIcon;

import sm from "./styles.module.scss";

type Props = Readonly<{
  mainIcon: React.ReactNode;
  backIcon: React.ReactNode;
}>;

const Header = ({ mainIcon, backIcon }: Props) => (
  <header className={sm.Header}>
    {backIcon}
    {mainIcon}
  </header>
);

export default Header;

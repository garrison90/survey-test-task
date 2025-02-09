import ClientSurveyDataProvider from "@/providers/ClientSurveyDataProvider";
import StoreProvider from "@/providers/StoreProvider";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => (
  <StoreProvider>
    <ClientSurveyDataProvider />
    {children}
  </StoreProvider>
);

export default Providers;

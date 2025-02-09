import getConfigData from "@/utils/getConfigData";
import { redirectToInitPage } from "@/utils/redirectToInitPage";

export default async function Home() {
  const config = await getConfigData();

  redirectToInitPage(config.initPageName);
}

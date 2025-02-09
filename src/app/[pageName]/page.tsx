import RenderScreenType from "@/components/RenderScreenType";

import getConfigData from "@/utils/getConfigData";
import getConfigDataByPageName from "@/utils/getConfigDataByPageName";
import { redirectToInitPage } from "@/utils/redirectToInitPage";

type Props = {
  params: Promise<{ pageName: string }>;
};

export async function generateStaticParams() {
  const config = await getConfigData();

  return Object.keys(config.pages).map((pageName) => ({
    pageName,
  }));
}

export default async function PageName({ params }: Props) {
  const { pageName } = await params;

  const { pageData, initPageName } = await getConfigDataByPageName(pageName);

  if (!pageData) {
    redirectToInitPage(initPageName);
  }

  return <RenderScreenType pageData={pageData} />;
}

import { redirect } from "next/navigation";

export const redirectToInitPage = (name: string) => {
  redirect(`/${name}`);
};

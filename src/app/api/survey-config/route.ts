import { NextResponse } from "next/server";

import getConfigData from "@/utils/getConfigData";

export async function GET() {
  const config = await getConfigData();

  if (!config) return NextResponse.json({});

  return NextResponse.json(config);
}

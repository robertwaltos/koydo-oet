import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    exam: "oet",
    premiumActive: false,
    dailyQuestionsUsed: 0,
    dailyQuestionsLimit: 10,
  });
}

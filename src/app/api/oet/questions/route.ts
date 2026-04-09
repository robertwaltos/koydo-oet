import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    exam: "oet",
    message: "Questions endpoint — connect to Supabase for question bank",
    categories: ["Listening","Reading","Writing","Speaking"],
  });
}

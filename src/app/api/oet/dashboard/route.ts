import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    exam: "oet",
    message: "Dashboard endpoint — connect to Supabase for live data",
    sections: ["Listening","Reading","Writing","Speaking"],
  });
}

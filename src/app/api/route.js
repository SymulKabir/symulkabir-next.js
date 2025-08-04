import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Make the page dynamic in production

export async function GET() {
  try {
    
    return new NextResponse('Hello from portfolio server', {
      status: 200,
    });
  } catch (error) {
    console.error("Error generating sitemap:", error.message);
    return new NextResponse(error.message, { status: 500 });
  }
}

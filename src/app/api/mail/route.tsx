import { NextResponse } from "next/server";
import handleMailSent from "./utilize/ContactMailer";

export const dynamic = "force-dynamic";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    await handleMailSent({ name, email, subject, message });

    return NextResponse.json(
      {
        message: "Mail sent successfully",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    let errorMessage = "Unknown error";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        message: "Failed to send mail",
        success: false,
        error: errorMessage,
      },
      {
        status: 500,
      }
    );
  }

}

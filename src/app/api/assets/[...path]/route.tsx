import { NextResponse, NextRequest } from "next/server";
import path from "path";
import fs from "fs/promises";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    const rootPath = path.join(process.cwd()); // absolute path to /src/assets
    const filePath = decodeURIComponent(pathname).replace("/api", "/src");
    const fullFilePath = path.join(rootPath, filePath);

    // Check if file exists
    try {
      await fs.access(fullFilePath); // throws if file doesn't exist
    } catch {
      return NextResponse.json(
        { message: "File not found", fullFilePath, success: false },
        { status: 404 }
      );
    }

    // Read file content
    const fileBuffer = await fs.readFile(fullFilePath);

    // Determine MIME type based on extension
    const ext = path.extname(fullFilePath).toLowerCase();
    let contentType = "application/octet-stream";
    if (ext === ".png") contentType = "image/png";
    else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    else if (ext === ".gif") contentType = "image/gif";
    else if (ext === ".svg") contentType = "image/svg+xml";

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: { "Content-Type": contentType },
    });
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) errorMessage = error.message;

    return NextResponse.json(
      { message: "Failed to serve file", success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

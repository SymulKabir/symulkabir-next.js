import { NextResponse, NextRequest } from "next/server";
import path from "path";
import fs from "fs/promises";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    const basePath = "/api/assets/"; // your route prefix
    const relativePath = pathname.replace(basePath, ""); // remove prefix
    const pathSegments = relativePath.split("/").filter(Boolean);

    const rootPath = path.join(process.cwd(), "src/assets");
    const fullFilePath = path.join(rootPath, ...pathSegments);

    try {
      await fs.access(fullFilePath);
    } catch {
      return NextResponse.json(
        { message: "File not found", success: false },
        { status: 404 }
      );
    }

    const fileBuffer = await fs.readFile(fullFilePath);

    const ext = path.extname(fullFilePath).toLowerCase();
    let contentType = "application/octet-stream";

    switch (ext) {
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
      case ".jpeg":
        contentType = "image/jpeg";
        break;
      case ".gif":
        contentType = "image/gif";
        break;
      case ".svg":
        contentType = "image/svg+xml";
        break;
    }

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: { "Content-Type": contentType },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { message: "Failed to serve file", success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

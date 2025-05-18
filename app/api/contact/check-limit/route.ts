import { NextResponse } from "next/server";
import { getRateLimitInfo } from "@/lib/rate-limiter";

export async function GET(request: Request) {
  try {
    // Get IP address
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    // Get rate limit info
    const rateLimitInfo = getRateLimitInfo(ip);

    return NextResponse.json({
      ip: ip,
      rateLimit: rateLimitInfo,
    });
  } catch (error) {
    console.error("Error checking rate limit:", error);
    return NextResponse.json(
      { error: "Error al comprobar el límite de tasa" },
      { status: 500 },
    );
  }
}

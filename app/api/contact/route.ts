import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limiter";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Get IP address for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    // Apply rate limit
    const rateLimitResult = checkRateLimit(ip);

    // Check if rate limit exceeded
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error:
            "Demasiados mensajes enviados. Por favor, intenta nuevamente más tarde.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": `${Math.ceil((rateLimitResult.timeToReset || 60000) / 1000)}`,
          },
        },
      );
    }

    // Parse the request body
    const { name, email, company, message } = await request.json();

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 },
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Contacto <noreply@madseven.com>",
      to: ["info@madseven.com"], // Update this to the email where you want to receive messages
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
            Nombre: ${name}
            Email: ${email}
            Empresa: ${company || "No especificada"}
            Mensaje: ${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 },
    );
  }
}

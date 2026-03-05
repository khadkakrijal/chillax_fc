import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function OPTIONS() {
  // Optional: helps if you call this API from fetch on a different origin
  return new NextResponse(null, { status: 204 });
}

export async function POST(req: Request) {
  try {
    // Parse body safely
    const body = await req.json().catch(() => ({} as any));

    // Honeypot (bots fill this)
    if (body?.website) return NextResponse.json({ ok: true }, { status: 200 });

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const position = String(body?.position ?? "").trim();
    const level = String(body?.level ?? "").trim();
    const availability = String(body?.availability ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Validations
    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your full name." },
        { status: 400 },
      );
    }
    if (phone.length < 6) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone/WhatsApp number." },
        { status: 400 },
      );
    }

    // Env checks (THIS prevents build/runtime crashes)
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONNECT_TO_EMAIL;
    const from = process.env.CONNECT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Server misconfigured: RESEND_API_KEY is missing." },
        { status: 500 },
      );
    }
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Server misconfigured: CONNECT_TO_EMAIL is missing." },
        { status: 500 },
      );
    }

    const subject = `Chillax FC Connect: ${name} (${position || "N/A"})`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.6;">
        <h2 style="margin:0 0 10px;">New Chillax FC Connect Form Submission</h2>

        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:6px 0;"><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Phone/WhatsApp:</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Email:</strong></td><td>${escapeHtml(email || "—")}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Preferred Position:</strong></td><td>${escapeHtml(position || "—")}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Experience Level:</strong></td><td>${escapeHtml(level || "—")}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Availability:</strong></td><td>${escapeHtml(availability || "—")}</td></tr>
        </table>

        <hr style="margin:16px 0; border:none; border-top:1px solid #e5e7eb;" />

        <p style="margin:0 0 6px;"><strong>Message:</strong></p>
        <p style="margin:0;">${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      // Resend uses "reply_to" in many examples; some typings also accept replyTo.
      // Keep both safe: use replyTo as you had; if TS complains, change to reply_to.
      replyTo: email || undefined,
    });

    return NextResponse.json(
      { ok: true, message: "Sent", id: (result as any)?.id },
      { status: 200 },
    );
  } catch (err: any) {
    // Helpful server log (won't show to user)
    console.error("Connect API error:", err);

    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
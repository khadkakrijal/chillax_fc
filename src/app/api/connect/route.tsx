import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // honeypot
    if (body.website) return NextResponse.json({ ok: true });

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const position = String(body.position ?? "").trim();
    const level = String(body.level ?? "").trim();
    const availability = String(body.availability ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "Please enter your full name." }, { status: 400 });
    }
    if (!phone || phone.length < 6) {
      return NextResponse.json({ ok: false, error: "Please enter a valid phone/WhatsApp number." }, { status: 400 });
    }

    const to = process.env.CONNECT_TO_EMAIL!;
    const from = process.env.CONNECT_FROM_EMAIL || "onboarding@resend.dev";

    const subject = `Chillax FC Connect: ${name} (${position || "N/A"})`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5;">
        <h2>New Chillax FC Connect Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone/WhatsApp:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "—")}</p>
        <p><strong>Preferred Position:</strong> ${escapeHtml(position || "—")}</p>
        <p><strong>Experience Level:</strong> ${escapeHtml(level || "—")}</p>
        <p><strong>Availability:</strong> ${escapeHtml(availability || "—")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true, message: "Sent" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
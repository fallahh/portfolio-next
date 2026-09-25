import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      );
    }

    const name = escapeHtml(body.name);
    const email = escapeHtml(body.email);
    const message = escapeHtml(body.message);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['esafallahroyani@gmail.com'],
      replyTo: body.email,
      subject: `New Portfolio Message from ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Message from Your Portfolio</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <div style="
            padding: 16px;
            background: #f4f4f4;
            border-radius: 8px;
            white-space: pre-wrap;
          ">
            ${message}
          </div>

          <hr />

          <p style="font-size: 13px; color: #666;">
            This message was sent from your personal portfolio website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent:', data);

    return NextResponse.json({
      ok: true,
      message: 'Email sent successfully',
    });

  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
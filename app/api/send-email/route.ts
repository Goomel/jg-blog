import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/app/lib/types';

const escapeHtml = (unsafeWord: string) =>
  unsafeWord
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, email, message } = contactFormSchema.parse(data);
    const formattedMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAIL_LOGIN,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${name} <${email}>`, // sender address
      to: 'grzymislawski.jakub@gmail.com', // list of receivers
      subject: 'jgdev.pl - Nowa wiadomość',
      text: message,
      html: `<p>${formattedMessage}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}

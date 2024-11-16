'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const escapeHtml = (unsafeWord: string) =>
  unsafeWord
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export const sendEmail = async (name: string, email: string, message: string) => {
  const formattedMessage = escapeHtml(message).replace(/\n/g, '<br>');
  const formattedName = escapeHtml(name);
  const { data, error } = await resend.emails.send({
    from: 'jgdev.pl <no-reply@jgdev.pl>',
    to: [process.env.MAIL_TO],
    subject: 'Nowa wiadomość - jgdev.pl',
    html: `
    <strong>Nowa wiadomość - jgdev.pl!</strong>
    <p><strong>Imię i nazwisko:</strong> ${formattedName}<br>
    <strong>Adres email:</strong> ${email}<br>
    <strong>Wiadomość:</strong><br>${formattedMessage}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

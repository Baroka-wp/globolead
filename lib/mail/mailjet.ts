import Mailjet from 'node-mailjet';
import { config } from '../config';

const mailjet = new Mailjet({
  apiKey: config.mailjet.apiKey,
  apiSecret: config.mailjet.apiSecret
});

export async function sendEmail({
  to,
  subject,
  html
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: config.mailjet.senderEmail,
            Name: config.mailjet.senderName
          },
          To: [
            {
              Email: to,
              Name: to
            }
          ],
          Subject: subject,
          HTMLPart: html
        }
      ]
    });
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
}
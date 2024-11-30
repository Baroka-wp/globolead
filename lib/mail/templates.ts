import { format } from 'date-fns';
import { config } from '../config';

export function generateDemoEmailTemplate(data: {
  customerName: string;
  customerEmail: string;
  date: Date;
  meetLink: string;
}) {
  const formattedDate = format(data.date, 'MMMM do, yyyy');
  const formattedTime = format(data.date, 'h:mm a');

  const emailStyle = `
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #191C1F; color: #FFFFFF; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #FFFFFF; }
    .button { display: inline-block; padding: 12px 24px; background-color: #EA4545; color: #FFFFFF; text-decoration: none; border-radius: 4px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #EEEEEE; font-size: 12px; color: #555555; }
  `;

  return {
    customerEmail: {
      subject: 'Your GloboLead Demo Session Confirmation',
      html: `
        <html>
          <head>
            <style>${emailStyle}</style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Demo Session Confirmed!</h1>
              </div>
              <div class="content">
                <p>Hi ${data.customerName},</p>
                <p>Your demo session has been scheduled for:</p>
                <p>
                  <strong>Date:</strong> ${formattedDate}<br>
                  <strong>Time:</strong> ${formattedTime}
                </p>
                <p style="margin: 30px 0;">
                  <a href="${data.meetLink}" class="button">Join Google Meet</a>
                </p>
                <p>We look forward to showing you how GloboLead can transform your lead management process.</p>
                <div class="footer">
                  <p>Best regards,<br>GloboLead Team</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    },
    adminEmail: {
      subject: 'New Demo Session Scheduled',
      html: `
        <html>
          <head>
            <style>${emailStyle}</style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Demo Session</h1>
              </div>
              <div class="content">
                <p><strong>Customer:</strong> ${data.customerName}<br>
                <strong>Email:</strong> ${data.customerEmail}<br>
                <strong>Date:</strong> ${formattedDate}<br>
                <strong>Time:</strong> ${formattedTime}</p>
                <p style="margin: 30px 0;">
                  <a href="${data.meetLink}" class="button">Join Google Meet</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `
    }
  };
}
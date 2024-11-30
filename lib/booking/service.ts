import { BookingFormData } from './types';
import { sendEmail } from '@/lib/mail/mailjet';
import { generateDemoEmailTemplate } from '@/lib/mail/templates';
import { createCalendarEvent } from './calendar';
import { BookingError } from '@/lib/errors';

export async function createBooking(formData: BookingFormData) {
  try {
    const { name, email, date, time } = formData;
    
    if (!name || !email || !date || !time) {
      throw new BookingError('Missing required fields');
    }

    const startTime = new Date(`${date}T${time}`);
    const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later

    // Create calendar event with Meet link
    const { meetLink, eventId } = await createCalendarEvent({
      name,
      email,
      startTime,
      endTime
    });

    if (!meetLink) {
      throw new BookingError('Failed to generate meeting link');
    }

    // Generate and send emails
    const emailTemplates = generateDemoEmailTemplate({
      customerName: name,
      customerEmail: email,
      date: startTime,
      meetLink
    });

    await Promise.all([
      sendEmail({
        to: email,
        subject: emailTemplates.customerEmail.subject,
        html: emailTemplates.customerEmail.html
      }),
      sendEmail({
        to: "birotori@gmail.com",
        subject: emailTemplates.adminEmail.subject,
        html: emailTemplates.adminEmail.html
      })
    ]);

    return { 
      success: true, 
      meetLink,
      eventId 
    };
  } catch (error) {
    console.error('Failed to create booking:', error);
    if (error instanceof BookingError) {
      throw error;
    }
    throw new BookingError('Failed to create booking');
  }
}
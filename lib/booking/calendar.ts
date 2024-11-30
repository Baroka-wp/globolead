import { google } from 'googleapis';
import { config } from '@/lib/config';

const calendar = google.calendar({
  version: 'v3',
  auth: new google.auth.JWT(
    config.google.clientEmail,
    undefined,
    config.google.privateKey,
    ['https://www.googleapis.com/auth/calendar']
  )
});

interface CreateEventParams {
  name: string;
  email: string;
  startTime: Date;
  endTime: Date;
}

export async function createCalendarEvent({ 
  name, 
  email, 
  startTime, 
  endTime 
}: CreateEventParams) {
  const event = await calendar.events.insert({
    calendarId: config.google.calendarId,
    requestBody: {
      summary: `GloboLead Demo with ${name}`,
      description: `Demo session with ${name} (${email})`,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'UTC'
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'UTC'
      },
      attendees: [
        { email },
        { email: config.demo.adminEmail }
      ],
      conferenceData: {
        createRequest: {
          requestId: `demo-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      }
    },
    conferenceDataVersion: 1
  });

  return {
    meetLink: event.data.conferenceData?.entryPoints?.[0]?.uri || '',
    eventId: event.data.id || ''
  };
}
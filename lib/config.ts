export const config = {
  mailjet: {
    apiKey: process.env.MAILJET_API_KEY || '',
    apiSecret: process.env.MAILJET_API_SECRET || '',
    senderEmail: 'birotori@gmail.com',
    senderName: 'GloboLead Demo Team'
  },
  demo: {
    meetingDuration: 30, // minutes
    adminEmail: 'birotori@gmail.com'
  },
  google: {
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL || '',
    privateKey: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    calendarId: process.env.GOOGLE_CALENDAR_ID || ''
  }
} as const;
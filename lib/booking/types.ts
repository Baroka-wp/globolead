export interface BookingFormData {
  name: string;
  email: string;
  company: string;
  date: Date;
  time: string;
}

export interface TimeSlot {
  value: string;
  label: string;
  available: boolean;
}
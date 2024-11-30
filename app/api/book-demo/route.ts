import { NextResponse } from 'next/server';
import { createBooking } from '@/lib/booking/service';
import { BookingError } from '@/lib/errors';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await createBooking(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to book demo:', error);
    
    if (error instanceof BookingError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
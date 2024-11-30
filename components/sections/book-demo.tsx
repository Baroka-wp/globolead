"use client";

import { Card } from "@/components/ui/card";
import { BookingForm } from "@/components/booking/BookingForm";

export function BookDemo() {
  return (
    <section id="demo" className="container mx-auto px-4 py-24 max-w-[1400px]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Book a Personalized Demo
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          See how GloboLead can transform your lead management process with a personalized demonstration
        </p>
      </div>

      <Card className="max-w-[800px] mx-auto bg-card border-border/50">
        <BookingForm />
      </Card>
    </section>
  );
}
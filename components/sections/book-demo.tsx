"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
];

export function BookDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

  return (
    <section id="demo" className="container px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Book a Personalized Demo
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
          See how GloboLead can transform your lead management process
        </p>
      </div>

      <Card className="max-w-[800px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <Label>Your Information</Label>
            <div className="space-y-4 mt-4">
              <div>
                <Input placeholder="Full Name" />
              </div>
              <div>
                <Input type="email" placeholder="Work Email" />
              </div>
              <div>
                <Input placeholder="Company" />
              </div>
            </div>
          </div>
          
          <div>
            <Label className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Select Date & Time
            </Label>
            <div className="mt-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 1))}
              />
              
              <div className="mt-4">
                <Label className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4" />
                  Available Times
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className="w-full"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t p-6">
          <Button className="w-full" size="lg">
            Schedule Demo
          </Button>
        </div>
      </Card>
    </section>
  );
}
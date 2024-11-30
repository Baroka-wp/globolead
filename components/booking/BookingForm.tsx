"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { BookingFormData } from "@/lib/booking/types";
import { TIME_SLOTS } from "@/lib/booking/constants";
import { Calendar } from "@/components/ui/calendar";
import { Clock } from "lucide-react";
import { useBookingForm } from "@/hooks/use-booking-form";

export function BookingForm() {
  const { formData, isSubmitting, handleInputChange, handleDateSelect, handleTimeSelect, handleSubmit } = useBookingForm();
  
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      <div>
        <Label>Your Information</Label>
        <div className="space-y-4 mt-4">
          <div>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Work Email"
              value={formData.email || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Input
              name="company"
              placeholder="Company"
              value={formData.company || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div>
        <Label className="flex items-center gap-2">
          Select Date & Time
        </Label>
        <div className="mt-4">
          <Calendar
            mode="single"
            selected={formData.date}
            onSelect={handleDateSelect}
            className="rounded-md border"
            disabled={(date) =>
              date < new Date() ||
              date > new Date(new Date().setMonth(new Date().getMonth() + 1))
            }
          />

          <div className="mt-4">
            <Label className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4" />
              Available Times
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {TIME_SLOTS.map((time) => (
                <Button
                  key={time}
                  variant={formData.time === time ? "default" : "outline"}
                  onClick={() => handleTimeSelect(time)}
                  className="w-full"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <Button
          className="w-full"
          size="lg"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Scheduling..." : "Schedule Demo"}
        </Button>
      </div>
    </div>
  );
}
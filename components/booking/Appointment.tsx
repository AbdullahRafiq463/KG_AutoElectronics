"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, CheckCircle2, ChevronRight, Loader2, Sparkles } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  make: z.string().min(2, "Vehicle make is required."),
  model: z.string().min(1, "Vehicle model is required."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().optional(),
  date: z.string().min(1, "Please select a preferred date."),
  time: z.string().min(1, "Please select a preferred time."),
});

type FormData = z.infer<typeof formSchema>;

export default function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      make: "",
      model: "",
      service: "",
      message: "",
      date: "",
      time: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <section id="booking" className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Background spot glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Heading
          badge="Secure Booking"
          title="Schedule Your Diagnostics & Repair"
          subtitle="Reserve a local drive-in repair slot in Birmingham or pre-register your mail-in module. Our technical team will follow up instantly."
        />

        <div className="relative glass-card rounded-2xl p-8 sm:p-12 border border-white/5 bg-[#090909]/60 shadow-2xl">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Your Name (Required)
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.name.message}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Email Address (Required)
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.email.message}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Phone Number (Required)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="e.g. 07886480622"
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.phone.message}</span>
                  )}
                </div>

                {/* Service */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service-select" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Select Repair Service
                  </label>
                  <select
                    id="service-select"
                    {...register("service")}
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                  >
                    <option value="">Choose Service...</option>
                    <option value="clock-spring-repairs">Clock Spring Repairs</option>
                    <option value="abs-module-programming">ABS Module Repairs</option>
                    <option value="instrument-cluster-fixes">Instrument Cluster Repairs</option>
                    <option value="led-tail-light-repairs">LED Tail Light Repairs</option>
                    <option value="headlight-modules">Headlight Module Repairs</option>
                    <option value="ecu-engine-management">ECU / Engine Management</option>
                    <option value="diagnostics">Diagnostics & Coding</option>
                  </select>
                  {errors.service && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.service.message}</span>
                  )}
                </div>

                {/* Vehicle Make */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="make" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Vehicle Make (Required)
                  </label>
                  <input
                    id="make"
                    type="text"
                    {...register("make")}
                    placeholder="e.g. Mercedes, BMW, Audi"
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                  />
                  {errors.make && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.make.message}</span>
                  )}
                </div>

                {/* Vehicle Model */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="model" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Vehicle Model (Required)
                  </label>
                  <input
                    id="model"
                    type="text"
                    {...register("model")}
                    placeholder="e.g. Vito, E-Class, 5-Series"
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                  />
                  {errors.model && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.model.message}</span>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      id="date"
                      type="date"
                      {...register("date")}
                      className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                    />
                  </div>
                  {errors.date && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.date.message}</span>
                  )}
                </div>

                {/* Preferred Time */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    {...register("time")}
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body"
                  >
                    <option value="">Select Time...</option>
                    <option value="morning">Morning (09:00 - 12:00)</option>
                    <option value="afternoon">Afternoon (12:00 - 15:00)</option>
                    <option value="evening">Late Afternoon (15:00 - 18:00)</option>
                  </select>
                  {errors.time && (
                    <span className="text-[10px] text-primary-red font-semibold">{errors.time.message}</span>
                  )}
                </div>

                {/* Details Message */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label htmlFor="message" className="font-heading text-xs font-bold uppercase tracking-wider text-muted-text">
                    Provide Diagnostic Symptoms / Part Numbers (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about the issue. Include any fault codes, part numbers (e.g. 5K0953569), or light warnings on your dashboard."
                    className="w-full bg-[#141414] border border-white/5 text-sm text-white px-5 py-3.5 rounded-xl outline-none focus:border-primary-red/50 transition-colors font-body resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="sm:col-span-2 mt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full py-4 text-base rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Validating Data & Creating Booking...
                      </>
                    ) : (
                      <>
                        Confirm Request & Reserve Slot
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-primary-red/10 border border-primary-red/30 rounded-full flex items-center justify-center mb-6 relative">
                  <CheckCircle2 className="w-10 h-10 text-primary-red relative z-10" />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-primary-red/20 rounded-full z-0"
                  />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-red/10 border border-primary-red/20 mb-4">
                  <Sparkles className="w-4 h-4 text-primary-red" />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-primary-red">
                    Booking Successful
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                  Appointment Requested
                </h3>
                
                <p className="font-body text-sm text-neutral-400 max-w-md leading-relaxed mb-8">
                  Your electronic repair ticket has been registered. An automotive electronics engineer will contact you via WhatsApp / email within 60 minutes to confirm your diagnostic slot or verify your mailing details.
                </p>

                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3.5 rounded-xl"
                >
                  Create Another Ticket
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

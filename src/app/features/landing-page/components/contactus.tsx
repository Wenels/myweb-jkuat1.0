"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import type { ChangeEvent, JSX } from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SocialIconProps = {
  size?: number;
};

// Custom SVG components for brand/social icons since they were removed in Lucide v1.x
const Linkedin = ({ size = 24 }: SocialIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24 }: SocialIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Twitter</title>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ size = 24 }: SocialIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Instagram</title>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 24 }: SocialIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>YouTube</title>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: FormChangeEvent): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On submit, show a Sonner toast notification instead of an inline success block
  const handleSubmit = (): void => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent!", {
        description: `We'll get back to you at ${form.email} shortly.`,
      });
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="bg-[#0f172a] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE — Contact info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-black text-white leading-tight">
              Let's talk
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              We collaborate with thousands of creators, entrepreneurs and
              complete legends.
            </p>

            <div className="border-t border-white/10" />

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">My email</p>
                  <p className="text-slate-400 text-sm">hello@novastore.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone us</p>
                  <p className="text-slate-400 text-sm">+254 700 000 000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Find us</p>
                  <p className="text-slate-400 text-sm">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div className="flex items-center gap-4">
              {[
                { Icon: Linkedin, id: "linkedin" },
                { Icon: Twitter, id: "twitter" },
                { Icon: Send, id: "send" },
                { Icon: Instagram, id: "instagram" },
                { Icon: Youtube, id: "youtube" },
              ].map(({ Icon, id }) => (
                <button
                  key={id}
                  type="button"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={22} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — Shadcn-powered contact form */}
          {/* Reference: https://ui.shadcn.com/docs/components/input */}
          {/* Reference: https://ui.shadcn.com/docs/components/textarea */}
          {/* Reference: https://ui.shadcn.com/docs/components/button */}
          {/* Reference: https://ui.shadcn.com/docs/components/sonner */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex flex-col gap-6">
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="name-input"
                  className="text-white text-sm font-medium"
                >
                  Name
                </Label>
                <Input
                  id="name-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="bg-slate-900/70 border-slate-700 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 text-white placeholder:text-slate-600 rounded-xl h-12"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email-input"
                  className="text-white text-sm font-medium"
                >
                  Email
                </Label>
                <Input
                  id="email-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="bg-slate-900/70 border-slate-700 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 text-white placeholder:text-slate-600 rounded-xl h-12"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message-input"
                  className="text-white text-sm font-medium"
                >
                  Message
                </Label>
                <Textarea
                  id="message-input"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="I want to collaborate..."
                  className="bg-slate-900/70 border-slate-700 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 text-white placeholder:text-slate-600 rounded-xl resize-none"
                />
              </div>

              {/* Submit button */}
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message || loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold h-12 rounded-xl transition-colors duration-200"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

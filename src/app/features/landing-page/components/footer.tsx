import { Mail, Phone } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

const Twitter = ({ size = 24, ...props }: IconProps) => (
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
    {...props}
  >
    <title>Twitter</title>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }: IconProps) => (
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
    {...props}
  >
    <title>Instagram</title>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }: IconProps) => (
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
    {...props}
  >
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 24, ...props }: IconProps) => (
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
    {...props}
  >
    <title>YouTube</title>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <path d="m10 15 5-3-5-3v6z" />
  </svg>
);

export default function Footer() {
  return (
    // Main footer — light background to match inspiration
    <footer className="bg-white border-t border-gray-200">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">N</span>
              </div>
              <span className="text-gray-900 font-bold text-lg">NovaStore</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              We collaborate with thousands of creators, entrepreneurs and complete legends.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { Icon: Twitter, name: "Twitter" },
                { Icon: Instagram, name: "Instagram" },
                { Icon: Linkedin, name: "LinkedIn" },
                { Icon: Youtube, name: "YouTube" },
              ].map(({ Icon, name }) => (
                <button
                  key={name}
                  type="button"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                  aria-label={name}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 — Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-900 font-semibold text-sm">Company</h4>
            <ul className="flex flex-col gap-3">
              {["Community", "Testimonial"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
              {/* Company — scrolls to respective section */}
              <li>
                <a
                  href="#about"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Support */}
          {/* <div className="flex flex-col gap-4">
            <h4 className="text-gray-900 font-semibold text-sm">Support</h4>
            <ul className="flex flex-col gap-3">
              {["Help Center", "Tweet @novastore", "Email Us", "Feedback"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div> */}

          {/* Column 3 — Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-900 font-semibold text-sm">Support</h4>
            <ul className="flex flex-col gap-3">
              {["Tweet @novastore"].map((item) => (
                <li key={item}>
                  <a
                    href="https://x.com"
                    className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              {/* Feedback — scrolls to contact section */}
              <li>
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  Feedback
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  Help Center
                </a>
              </li>
              
            </ul>
          </div>

          {/* Column 4 — Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-900 font-semibold text-sm">Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                "All in One",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  Product
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  Shop with Us
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  Request A Product
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 — Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-900 font-semibold text-sm">Contact Us</h4>
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-indigo-600 flex-shrink-0" />
                <span className="text-gray-500 text-sm">+254 700 000 000</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-600 flex-shrink-0" />
                <span className="text-gray-500 text-sm">
                  hello@novastore.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © Copyright by NovaStore. All rights reserved. Home Page Designed By Samuel Gachuru.
          </p>

          {/* Legal links — the <a tag was missing here, that was the bug */}
          {/* Legal links */}
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Legal", "Site Map"].map(
              (link) => (
                <a
                  key={link}
                  href="/"
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

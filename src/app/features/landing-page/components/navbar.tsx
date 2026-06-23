"use client"; // Marks this as a Client Component so we can use useState and onClick

// Old nav items (commented out - replaced with e-commerce items below)
// import { CreditCard, Home, Layers, QrCode, User } from "lucide-react";

import { Heart, Home, ShoppingBag, ShoppingCart, User } from "lucide-react"; // Import icons from lucide-react library
import { useState } from "react"; // useState hook lets us track which nav item is active

// Old navigation items (commented out - these were for a banking/finance app)
// const NAV_ITEMS = [
//   { icon: Home, label: "Home" },
//   { icon: Layers, label: "Accounts" },
//   { icon: QrCode, label: "Scan QR" },
//   { icon: CreditCard, label: "Cards" },
//   { icon: User, label: "Profile" },
// ];

// Array of nav items — each has an icon component and a label string
const NAV_ITEMS = [
  { icon: Home, label: "HOUSE" }, // Home page
  { icon: ShoppingBag, label: "Products" }, // Products/shop page
  { icon: ShoppingCart, label: "Cart" }, // Shopping cart
  { icon: Heart, label: "Wishlist" }, // Saved/liked items
  { icon: User, label: "Profile" }, // User profile
];

export default function Navbar() {
  // active stores which nav item is currently selected, default is "Home"
  const [active, setActive] = useState("Home");

  return (
    // Outer div — fixed to top of screen, spans full width, sits above everything (z-50)
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Nav bar — dark background, subtle bottom border, horizontal layout */}
      <nav className="flex items-center justify-around bg-[#192137] border-b border-white/10 px-6 py-2 shadow-2xl">
        {/* Loop through each nav item and render a button */}
        {NAV_ITEMS.map(({ icon: Icon, label }) => (
          <button
            key={label} // Unique key for React to track each button
            type="button" // Prevents accidental form submission
            onClick={() => setActive(label)} // Set this item as active when clicked
            className={`flex flex-col items-center justify-center gap-1 px-5 py-2 rounded-xl transition-all duration-200 min-w-[64px] ${
              active === label
                ? "bg-[#2a3050] text-blue-400" // Active styles — blue highlight
                : "text-slate-400 hover:text-slate-200" // Inactive styles — grey, lighter on hover
            }`}
          >
            {/* Icon — bolder stroke when active */}
            <Icon size={22} strokeWidth={active === label ? 2.5 : 1.8} />

            {/* Label text below the icon */}
            <span className="text-[11px] font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

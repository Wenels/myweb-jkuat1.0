"use client";

import {
  Heart,
  Home,
  Info,
  Mail,
  Menu,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Navigation items — targetId used for smooth scroll on home page
const NAV_ITEMS = [
  { icon: Home, label: "Home", targetId: "home" },
  { icon: ShoppingBag, label: "Products", targetId: "products" },
  { icon: Info, label: "About", targetId: "about" },
  { icon: Mail, label: "Contact", targetId: "contact" },
  { icon: ShoppingCart, label: "Cart" },
  { icon: Heart, label: "Wishlist" },
  { icon: User, label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync active tab to the current route
  useEffect(() => {
    if (pathname === "/about") {
      setActive("About");
    }
  }, [pathname]);

  // IntersectionObserver to update active nav state on home page scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "products", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const labelMap: { [key: string]: string } = {
              home: "Home",
              products: "Products",
              about: "About",
              contact: "Contact",
            };
            if (labelMap[entry.target.id]) {
              setActive(labelMap[entry.target.id]);
            }
          }
        }
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0.1 },
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (label: string, targetId?: string) => {
    setActive(label);
    setMobileOpen(false);

    if (label === "About") {
      router.push("/about");
      return;
    }

    if (targetId) {
      if (pathname !== "/") {
        router.push(`/#${targetId}`);
      } else {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navbar — hidden on mobile */}
      <nav className="hidden md:flex items-center justify-around bg-[#192137] border-b border-white/10 px-6 py-2 shadow-2xl">
        {NAV_ITEMS.map(({ icon: Icon, label, targetId }) => (
          <button
            key={label}
            type="button"
            onClick={() => handleNavClick(label, targetId)}
            className={`flex flex-col items-center justify-center gap-1 px-5 py-2 rounded-xl transition-all duration-200 min-w-[64px] ${
              active === label
                ? "bg-[#2a3050] text-blue-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Icon size={22} strokeWidth={active === label ? 2.5 : 1.8} />
            <span className="text-[11px] font-medium">{label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Navbar — shown only on mobile */}
      {/* Reference: https://ui.shadcn.com/docs/components/sheet */}
      <nav className="flex md:hidden items-center justify-between bg-[#192137] border-b border-white/10 px-4 py-3 shadow-2xl">
        {/* Brand name */}
        <span className="text-white font-black text-lg tracking-tight">
          Nova<span className="text-indigo-400">Store</span>
        </span>

        {/* Mobile menu trigger — Shadcn Sheet */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <Menu size={24} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#192137] border-l border-white/10 w-72 p-0"
          >
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-white/10">
              <SheetTitle className="text-white font-black text-lg">
                Nova<span className="text-indigo-400">Store</span>
              </SheetTitle>
            </SheetHeader>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1 px-3 py-4">
              {NAV_ITEMS.map(({ icon: Icon, label, targetId }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleNavClick(label, targetId)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                    active === label
                      ? "bg-[#2a3050] text-blue-400"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon size={20} strokeWidth={active === label ? 2.5 : 1.8} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

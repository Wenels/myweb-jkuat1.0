import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1a]">
      {/* ===== SECTION 1 — Hero ===== */}
      <section className="pt-28 pb-16 px-8 max-w-7xl mx-auto text-center">
        {/* Small label */}
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
          ✦ About Us
        </p>
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
          Discover Smart Tech You'll Love —{" "}
          <span className="text-indigo-400">And a Brand You Can Trust</span>
        </h1>

        {/* Image gallery row */}
        <div className="flex items-end justify-center gap-3 mt-12">
          {[
            {
              src: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&auto=format&fit=crop",
              h: "h-36",
            },
            {
              src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop",
              h: "h-48",
            },
            {
              src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop",
              h: "h-64",
            },
            {
              src: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop",
              h: "h-48",
            },
            {
              src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&auto=format&fit=crop",
              h: "h-36",
            },
          ].map((img) => (
            <div
              key={img.src}
              className={`relative ${img.h} w-40 rounded-2xl overflow-hidden flex-shrink-0`}
            >
              <Image
                src={img.src}
                alt="Smart Wearable"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 2 — Mission statement ===== */}
      <section className="py-16 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <p className="text-white text-2xl font-semibold leading-relaxed">
          From fitness enthusiasts to fashion icons,{" "}
          <span className="text-indigo-400">we provide state-of-the-art</span>{" "}
          smart wearables to help you track your progress, stay connected, and
          express your style effortlessly.
        </p>

        {/* Right — image */}
        <div className="relative h-56 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop"
            alt="Design workshop"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== SECTION 3 — Stats ===== */}
      <section className="py-16 px-8 max-w-7xl mx-auto border-t border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50,000+", label: "Happy Customers" },
            { value: "24/7", label: "Premium Support" },
            { value: "15+", label: "Global Warehouses" },
            { value: "200+", label: "Smart Features" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-2">
              {/* Stat number */}
              <span className="text-white font-black text-4xl">{value}</span>
              {/* Stat label */}
              <span className="text-slate-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 4 — Vision ===== */}
      <section className="py-16 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — image grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop",
          ].map((src) => (
            <div key={src} className="relative h-40 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt="Vision image"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right — text */}
        <div className="flex flex-col gap-6">
          {/* Small label */}
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            ✦ Our Vision
          </p>
          {/* Headline */}
          <h2 className="text-3xl font-black text-white leading-tight">
            Redefining Wearable Technology{" "}
            <span className="text-indigo-400">For Everyone</span>
          </h2>
          {/* Description */}
          <p className="text-slate-400 leading-relaxed">
            Our vision is to design and deliver premium wearable technology that
            seamlessly integrates into your daily routine. We focus on
            innovation, durability, and elegance — so every choice feels
            empowering, secure, and rewarding from the moment you unbox your
            device.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We focus on clarity, integrity, and results — so every technology
            decision feels confident, secure, and rewarding from the first
            interaction to daily usage.
          </p>
          {/* CTA button */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 w-fit"
          >
            See Our Collection →
          </Link>
        </div>
      </section>

      {/* ===== SECTION 5 — Testimonial ===== */}
      <section className="py-16 px-8 max-w-3xl mx-auto text-center">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-4">
          <span className="text-amber-400 text-xl">★</span>
          <span className="text-amber-400 text-xl">★</span>
          <span className="text-amber-400 text-xl">★</span>
          <span className="text-amber-400 text-xl">★</span>
          <span className="text-amber-400 text-xl">★</span>
        </div>
        <p className="text-slate-400 text-xs mb-6">Rated 5/5</p>

        {/* Quote */}
        <p className="text-white text-xl font-semibold leading-relaxed mb-8">
          "Working with NovaStore was a total game-changer. Their smart watch
          helped me{" "}
          <span className="text-indigo-400">hit my fitness goals</span> while
          keeping me stylish and connected throughout the day with amazing
          battery life."
        </p>

        {/* Person */}
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
              alt="James Cena"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm">James Cena</p>
            <p className="text-slate-400 text-xs">Tech Enthusiast & Runner</p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — Team ===== */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            ✦ Our Team
          </p>
          <h2 className="text-4xl font-black text-white leading-tight">
            Professionals You Can Trust{" "}
            <span className="text-indigo-400">With Premium Technology</span>
          </h2>
        </div>

        {/* Team cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Daniel Wright",
              role: "Lead Hardware Engineer",
              src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
            },
            {
              name: "Domenic Ellen",
              role: "Creative UX Designer",
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
            },
            {
              name: "Michael Thompson",
              role: "Chief Technology Officer",
              src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
            },
            {
              name: "Andrew Collins",
              role: "Customer Experience Director",
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
            },
          ].map(({ name, role, src }) => (
            <div
              key={name}
              className="relative h-72 rounded-2xl overflow-hidden group"
            >
              {/* Team member image */}
              <Image
                src={src}
                alt={name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Name and role */}
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">{name}</p>
                <p className="text-slate-300 text-xs">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 7 — FAQ ===== */}
      <section className="py-16 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — headline */}
        <div>
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            ✦ FAQ
          </p>
          <h2 className="text-4xl font-black text-white leading-tight">
            Clear Answers.{" "}
            <span className="text-indigo-400">No Confusion.</span>
          </h2>
        </div>

        {/* Right — FAQ items */}
        <div className="flex flex-col gap-4">
          {[
            {
              q: "How do I sync my smart watch with my phone?",
              a: "Simply download the NovaStore companion app from the App Store or Google Play Store, enable Bluetooth on your smartphone, and follow the in-app pairing instructions to connect your smart watch.",
            },
            {
              q: "Is my smart watch water-resistant?",
              a: "Yes, all our smart watches come with IP68 or 5ATM water resistance, making them safe for intense workouts, heavy rain, and swimming in shallow waters.",
            },
            {
              q: "How long does the battery typically last?",
              a: "Depending on usage and active settings (such as Always-On Display and GPS tracking), our batteries typically last between 7 to 14 days on a single charge.",
            },
            {
              q: "What is the warranty and return policy?",
              a: "We offer a 1-year limited warranty on all hardware products and a 30-day money-back guarantee if you are not completely satisfied with your purchase.",
            },
            {
              q: "Do you offer worldwide shipping?",
              a: "Yes! We ship to over 100 countries globally with tracking details provided as soon as your order is dispatched from our fulfillment center.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-4 group"
            >
              {/* Question */}
              <summary className="text-white font-semibold text-sm cursor-pointer flex items-center justify-between list-none">
                {q}
                {/* Plus/minus toggle */}
                <span className="text-indigo-400 text-lg group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              {/* Answer */}
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== SECTION 8 — CTA Banner ===== */}
      <section className="py-8 px-8 max-w-7xl mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1200&auto=format&fit=crop"
            alt="Smart Watch banner"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 px-8">
            <h2 className="text-white text-3xl font-black">
              Your Next Companion Is{" "}
              <span className="text-indigo-400">Closer Than You Think</span>
            </h2>
            <p className="text-slate-300 text-sm max-w-md">
              Step into the future of fitness and connectivity. Elevate your
              everyday style with NovaStore's premium wearables.
            </p>
            <Link
              href="/#products"
              className="flex items-center gap-2 bg-white hover:bg-indigo-500 text-gray-900 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Explore Smart Watches Now →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

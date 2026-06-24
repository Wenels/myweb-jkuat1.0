import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    // Main section — dark navy background, full padding
    <section id="about" className="bg-[#0f172a] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — Text content */}
          <div className="flex flex-col gap-8">
            {/* Small label */}
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              About Us
            </span>

            {/* Main headline */}
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              NovaStore is your one-stop shop for premium products available in
              more than <span className="text-indigo-400">200 categories.</span>
            </h2>

            {/* Stats row */}
            <div className="flex items-center gap-12 py-8 border-t border-b border-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col gap-1">
                <span className="text-white font-black text-3xl">800+</span>
                <span className="text-slate-500 text-xs uppercase tracking-wide">
                  Employees
                </span>
                <span className="text-slate-600 text-xs">From Our Team</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-1">
                <span className="text-white font-black text-3xl">10</span>
                <span className="text-slate-500 text-xs uppercase tracking-wide">
                  Locations
                </span>
                <span className="text-slate-600 text-xs">From New York</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-1">
                <span className="text-white font-black text-3xl">50+</span>
                <span className="text-slate-500 text-xs uppercase tracking-wide">
                  Design Works
                </span>
                <span className="text-slate-600 text-xs">
                  Service for People
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Read Our Story
              </Link>
            </div>

            {/* Colored dots */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-indigo-500" />
              <div className="w-4 h-4 rounded-full bg-blue-400" />
              <div className="w-4 h-4 rounded-full bg-cyan-400" />
              <div className="w-4 h-4 rounded-full bg-purple-500" />
            </div>
          </div>

          {/* RIGHT SIDE — Image grid */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop"
              alt="Work 1"
              width={400}
              height={192}
              className="rounded-2xl object-cover w-full h-48"
            />
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop"
              alt="Work 2"
              width={400}
              height={192}
              className="rounded-2xl object-cover w-full h-48 mt-8"
            />
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop"
              alt="Work 3"
              width={400}
              height={192}
              className="rounded-2xl object-cover w-full h-48"
            />
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop"
              alt="Work 4"
              width={400}
              height={192}
              className="rounded-2xl object-cover w-full h-48 mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

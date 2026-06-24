import Image from "next/image";

export default function Hero() {
  return (
    // Main section — dark navy background, full screen height, padding for navbar
    <section
      id="home"
      className="min-h-screen bg-[#0a0d1a] flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — Text content */}
        <div className="flex flex-col gap-6">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            NOVASTORE::Choose your best{" "}
            <span className="text-indigo-400">smart watch</span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            NovaStore We got your best smart watch to match your lifestyle,
            goals, and personal style. Whether you're tracking fitness or making
            a fashion statement.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-2">
            {/* Primary button */}
            <button
              type="button"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              Book In advance
            </button>

            {/* Secondary button */}
            <button
              type="button"
              className="bg-purple-900/60 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-full border border-purple-700/50 transition-all duration-200"
            >
              Add to cart
            </button>

            <button
              type="button"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              View all products
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12 mt-8 pt-8 border-t border-white/10">
            {/* Stat 1 */}
            <div className="flex flex-col gap-1">
              <span className="text-white font-black text-3xl">0</span>
              <span className="text-slate-500 text-sm">User Registered</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-1">
              <span className="text-white font-black text-3xl">0%</span>
              <span className="text-slate-500 text-sm">
                Client Satisfaction
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-1">
              <span className="text-white font-black text-3xl">0</span>
              <span className="text-slate-500 text-sm">Money Protected</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Product image */}
        <div className="relative flex items-center justify-center">
          {/* Glow effect behind image */}
          <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[80px]" />

          {/* Watch image */}
          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop"
            alt="Smart Watch"
            width={500}
            height={500}
            className="relative z-10 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

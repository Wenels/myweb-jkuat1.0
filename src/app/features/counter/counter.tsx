"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import { type FormEvent, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(89);
  const [inputValue, setInputValue] = useState("");

  const handleSetCustom = (e: FormEvent) => {
    e.preventDefault();
    const parsed = Number.parseInt(inputValue, 10);
    if (!Number.isNaN(parsed)) {
      setCount(parsed);
      setInputValue("");
    }
  };

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-2xl max-w-md w-full text-center relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">
        Interactive Counter
      </h2>
      <h1 className="text-2xl font-bold text-white mb-6">Counter</h1>

      <div className="relative my-8 flex justify-center items-center">
        <span className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 select-none transition-all duration-300">
          {count}
        </span>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className="flex-1 py-3.5 bg-slate-800 hover:bg-slate-750 active:bg-slate-700 text-slate-200 font-semibold rounded-2xl border border-slate-700/80 shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 duration-150"
          aria-label="Decrement"
        >
          <Minus className="w-5 h-5" />
          <span>Decrease</span>
        </button>

        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="flex-1 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/15 flex items-center justify-center gap-2 transition-all active:scale-95 duration-150"
          aria-label="Increment"
        >
          <Plus className="w-5 h-5" />
          <span>Increase</span>
        </button>
      </div>

      <form
        onSubmit={handleSetCustom}
        className="mt-6 flex gap-2 items-center justify-center"
      >
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter custom value..."
          className="flex-1 px-4 py-2.5 bg-slate-950/40 border border-slate-800 focus:border-indigo-500/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 text-center text-sm transition-all"
        />
      </form>

      <button
        type="button"
        onClick={() => setCount(0)}
        className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors duration-150"
        aria-label="Reset counter"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Reset Count
      </button>
    </div>
  );
}

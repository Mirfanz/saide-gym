"use client";

import React, { useState } from "react";
import { GYM_INFO } from "@/data/gymData";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover / desktop */}
      <div
        className={`hidden sm:block px-3.5 py-1.5 rounded-xl bg-zinc-900/95 border border-zinc-800 text-xs font-semibold text-zinc-200 shadow-xl backdrop-blur-md transition-all duration-300 ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span>Chat Admin Saide Gym 👋</span>
      </div>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
          "Halo Admin Saide Gym Karawang, saya ingin tanya info membership dan latihan hari ini.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Admin Saide Gym"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 text-zinc-950" />
      </a>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { GYM_INFO } from "@/data/gymData";
import { WalletMoneyIcon } from "@solar-icons/react/bold-duotone/wallet-money";
import { WhatsAppIcon } from "./Icons";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800 shadow-2xl animate-fadeIn">
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
        {/* Left: Quick Tariff Chip */}
        <div className="flex flex-col pl-1">
          <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-semibold">
            <WalletMoneyIcon className="w-3 h-3 text-red-400" />
            <span>Tarif Member</span>
          </div>
          <div className="text-xs font-black text-white">
            Visit <span className="text-red-400">15K</span> • Bln{" "}
            <span className="text-red-400">115K</span>
          </div>
        </div>

        {/* Right: Instant WhatsApp Action Button */}
        <a
          href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
            "Halo Admin Said'e Gym Karawang, saya mau daftar / tanya jadwal latihan hari ini.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-500 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-red-600/25"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>Chat WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FACILITIES } from "@/data/gymData";
import { DumbbellIcon, FlameIcon, UsersIcon, ShieldIcon, CheckIcon } from "./Icons";

export default function Facilities() {
  const [activeTab, setActiveTab] = useState(FACILITIES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "dumbbell":
        return <DumbbellIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />;
      case "cables":
        return <DumbbellIcon className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />;
      case "flame":
        return <FlameIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />;
      case "users":
        return <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6 text-rose-300" />;
      case "shield":
      default:
        return <ShieldIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />;
    }
  };

  const selectedFacility = FACILITIES.find((f) => f.id === activeTab) || FACILITIES[0];

  return (
    <section id="fasilitas" className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs font-semibold text-red-400">
            <span>Fasilitas & Peralatan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Peralatan Lengkap & Terawat untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Setiap Target Latihan
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base lg:text-lg">
            Mulai dari pembentukan massa otot (*hypertrophy*), penguatan tenaga (*strength*), hingga pembakaran kalori (*fat loss*), semua perlengkapan tersedia lengkap di Saide Gym.
          </p>
        </div>

        {/* Tab Buttons: Horizontal swipeable on mobile, centered flex on desktop */}
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none [scrollbar-width:none]">
            {FACILITIES.map((facility) => {
              const isActive = facility.id === activeTab;
              return (
                <button
                  key={facility.id}
                  onClick={() => setActiveTab(facility.id)}
                  className={`flex-shrink-0 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border whitespace-nowrap ${
                    isActive
                      ? "bg-red-600 text-white border-red-500 shadow-md shadow-red-600/25 scale-[1.02]"
                      : "bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span>{facility.title.split("&")[0].trim()}</span>
                </button>
              );
            })}
          </div>
          {/* Subtle mobile hint */}
          <p className="sm:hidden text-[10px] text-zinc-500 text-center mt-1">
            ← Geser tombol untuk melihat zona fasilitas lainnya →
          </p>
        </div>

        {/* Detailed Showcase of Selected Tab with Visual Photo */}
        <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl bg-zinc-900/70 border border-zinc-800 p-4 sm:p-8 lg:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center flex-shrink-0">
                  {getIcon(selectedFacility.icon)}
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-red-400 font-bold block">
                    {selectedFacility.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                    {selectedFacility.title}
                  </h3>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-xs sm:text-base">
                {selectedFacility.description}
              </p>

              <div className="space-y-2.5 pt-1">
                <h4 className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-bold">
                  Peralatan & Fitur yang Tersedia:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {selectedFacility.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 sm:p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs sm:text-sm text-zinc-200"
                    >
                      <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: High-Impact Visual Photo Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-xl sm:rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl group">
                <div className="relative h-48 sm:h-60 overflow-hidden">
                  <img
                    src={selectedFacility.image}
                    alt={selectedFacility.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-red-400 text-[10px] sm:text-xs font-bold border border-zinc-700">
                      {selectedFacility.tag}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Latihan Aman, Bersih & Terarah
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 mt-1">
                      Semua peralatan diinspeksi secara berkala demi keamanan, kenyamanan postur, dan hasil latihan optimal Anda.
                    </p>
                  </div>

                  <a
                    href="#harga"
                    className="w-full block py-2.5 sm:py-3 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-500 text-white font-bold text-xs sm:text-sm text-center transition-all shadow-md shadow-red-600/20"
                  >
                    Daftar & Rasakan Fasilitasnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { GYM_INFO } from "@/data/gymData";
import {
  StarIcon,
  WhatsAppIcon,
  MapPinIcon,
  CheckIcon,
  SparklesIcon,
  ClockIcon,
  SaideGymLogo,
} from "./Icons";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      {/* Background Hero Photography with Dark Dramatic Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Real Gym Atmospheric Photo with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />

        {/* Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-red-600/10 blur-[100px] sm:blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-rose-500/5 blur-[90px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] sm:text-xs text-zinc-300 shadow-inner backdrop-blur-md">
              <span className="flex items-center text-amber-400 gap-1 font-bold">
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9 / 5.0
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">
                <span className="hidden sm:inline">Pusat Fitness Terfavorit di Sukaluyu, Karawang</span>
                <span className="sm:hidden">Fitness Sukaluyu, Karawang</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
              Bentuk Tubuh Ideal,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-400">
                Latihan Nyaman & Percaya Diri
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pusat kebugaran resmi <strong className="text-white">SAIDE GYM</strong> di Sukaluyu, Karawang. Peralatan lengkap,
              suasana bersih & ramah pemula, serta didampingi coach berpengalaman dengan tarif paling hemat.
            </p>

            {/* Price highlights pill - Optimized compact grid for mobile */}
            <div className="grid grid-cols-3 gap-2 pt-1 text-center font-bold text-[11px] sm:text-xs max-w-md mx-auto lg:mx-0">
              <div className="px-2 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-wider text-red-400/80 font-medium">Harian</span>
                <span className="font-black text-xs sm:text-sm">Visit 15K</span>
              </div>
              <div className="px-2 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium">Bulanan</span>
                <span className="font-black text-xs sm:text-sm text-white">Member 115K</span>
              </div>
              <div className="px-2 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium">Privat PT</span>
                <span className="font-black text-xs sm:text-sm text-rose-400">Free Member</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#harga"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all active:scale-[0.98] text-center flex items-center justify-center gap-2 min-h-[46px]"
              >
                <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Lihat Pilihan Paket & Harga</span>
              </a>

              <a
                href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
                  "Halo Admin Saide Gym Karawang, saya ingin konsultasi program latihan dan tanya info membership."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-white font-bold text-sm sm:text-base transition-all active:scale-[0.98] text-center flex items-center justify-center gap-2 min-h-[46px]"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span>Bebas Biaya Admin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span>Free Loker & Parkir</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span>Coach Standby</span>
              </div>
            </div>
          </div>

          {/* Right Column: Athletic Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-600/30 via-rose-500/20 to-orange-500/20 blur-md opacity-70" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 sm:p-7 backdrop-blur-xl shadow-2xl space-y-5 overflow-hidden">
                {/* Visual Gym Photo Thumbnail */}
                <div className="relative h-28 sm:h-36 rounded-xl overflow-hidden -mt-1 -mx-1 border border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
                    alt="Suasana Latihan di Saide Gym Karawang"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-md text-red-400 font-bold border border-zinc-800 text-[10px] sm:text-xs">
                      🔥 Area Latihan Lengkap
                    </span>
                    <span className="text-[10px] text-zinc-300 bg-zinc-950/80 px-2 py-0.5 rounded backdrop-blur-md">
                      Sukaluyu, Karawang
                    </span>
                  </div>
                </div>

                {/* Header of the card */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0">
                      <SaideGymLogo className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-md" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-white">SAIDE GYM</h2>
                      <p className="text-[11px] sm:text-xs text-zinc-400 flex items-center gap-1">
                        <MapPinIcon className="w-3 h-3 text-red-400" />
                        Sukaluyu, Telukjambe Timur
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 text-[11px] font-bold border border-red-500/30">
                      4.9 ⭐ Maps
                    </span>
                    <p className="text-[10px] text-zinc-500 mt-0.5">38+ Review</p>
                  </div>
                </div>

                {/* Live Info Grid */}
                <div className="grid grid-cols-2 gap-2.5 text-left">
                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-[10px] text-zinc-400 block font-medium">Jam Buka</span>
                    <div className="text-xs sm:text-sm font-bold text-zinc-100 mt-0.5 flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5 text-red-400" />
                      08:00 - 22:00
                    </div>
                    <span className="text-[9px] text-red-400 font-semibold">Setiap Hari</span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-[10px] text-zinc-400 block font-medium">Tarif Latihan</span>
                    <div className="text-xs sm:text-sm font-bold text-red-400 mt-0.5">
                      Mulai 15 Ribu
                    </div>
                    <span className="text-[9px] text-zinc-400">Tanpa biaya daftar</span>
                  </div>
                </div>

                {/* Popular Feature Checklist */}
                <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </div>
                    <span>Dumbbell lengkap, Olympic barbel & Squat rack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </div>
                    <span>Cable crossover, Lat pulldown & Mesin isolasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </div>
                    <span>Cardio zone & pelatih standby siap membantu</span>
                  </div>
                </div>

                {/* Action in Card */}
                <div className="pt-1">
                  <a
                    href="#harga"
                    className="w-full block py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700/80 hover:text-red-400 text-white font-bold text-xs sm:text-sm text-center transition-colors border border-zinc-700"
                  >
                    Cek Semua Tarif & Paket Promo →
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

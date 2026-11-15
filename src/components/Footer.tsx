import React from "react";
import { GYM_INFO } from "@/data/gymData";
import { StarIcon } from "@solar-icons/react/bold/star";
import { WalletMoneyIcon } from "@solar-icons/react/bold-duotone/wallet-money";
import { MapPointIcon } from "@solar-icons/react/linear/map-point";
import { ClockCircleIcon } from "@solar-icons/react/linear/clock-circle";
import { PhoneCallingIcon } from "@solar-icons/react/linear/phone-calling";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  SaideGymLogo,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      {/* Upper Footer CTA Strip */}
      <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-950 border-b border-zinc-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white">
              Siap Memulai Hari Ini?
            </h3>
            <p className="text-sm text-zinc-300">
              Datang langsung ke Saide Gym Sukaluyu Karawang atau hubungi admin
              via WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
                "Halo Admin Saide Gym Karawang, saya ingin mendaftar member hari ini.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/25 transition-all hover:scale-105 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat WhatsApp: {GYM_INFO.phone}</span>
            </a>

            <a
              href={GYM_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-sm border border-zinc-700 transition-all flex items-center gap-2"
            >
              <MapPointIcon className="w-4 h-4 text-red-400" />
              <span>Petunjuk Arah Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <SaideGymLogo className="w-10 h-10 drop-shadow-md" />
              </div>
              <span className="text-2xl font-black text-white tracking-wider">
                SAIDE <span className="text-red-500">GYM</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Pusat kebugaran dan fitness center ramah pemula di Sukaluyu,
              Telukjambe Timur, Karawang. Menyediakan fasilitas alat lengkap,
              lingkungan nyaman, dan bimbingan pelatih profesional dengan tarif
              paling bersahabat.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <StarIcon className="w-4 h-4 text-amber-400" />
              <span>4.9 / 5.0 Rating di Google Maps (38+ Ulasan Nyata)</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Saide Gym"
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-pink-400 flex items-center justify-center border border-zinc-800 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={GYM_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Saide Gym"
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center border border-zinc-800 transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/${GYM_INFO.phoneIntl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Saide Gym"
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-red-400 flex items-center justify-center border border-zinc-800 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <a
                href={GYM_INFO.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree Saide Gym"
                className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 hover:text-red-400 flex items-center justify-center border border-zinc-800 transition-colors"
              >
                Linktree
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-red-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#fasilitas"
                  className="hover:text-red-400 transition-colors"
                >
                  Fasilitas & Alat
                </a>
              </li>
              <li>
                <a
                  href="#harga"
                  className="hover:text-red-400 transition-colors"
                >
                  Paket Member
                </a>
              </li>
              <li>
                <a
                  href="#harga"
                  className="hover:text-red-400 transition-colors"
                >
                  Personal Trainer
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="hover:text-red-400 transition-colors"
                >
                  Ulasan Member
                </a>
              </li>
              <li>
                <a
                  href="#lokasi"
                  className="hover:text-red-400 transition-colors"
                >
                  Peta Lokasi
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-red-400 transition-colors"
                >
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Pricing Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <WalletMoneyIcon className="w-4 h-4 text-red-400" />
              <span>Tarif Populer</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                <span>Visit Harian</span>
                <span className="font-bold text-red-400">Rp 15.000</span>
              </li>
              <li className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                <span>Member 1 Bulan</span>
                <span className="font-bold text-white">Rp 115.000</span>
              </li>
              <li className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                <span>Member 3 Bulan (Best)</span>
                <span className="font-bold text-red-400">Rp 330.000</span>
              </li>
              <li className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                <span>Member 6 Bulan (Hemat)</span>
                <span className="font-bold text-white">Rp 650.000</span>
              </li>
              <li className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                <span>PT 1 Sesi + Free Visit</span>
                <span className="font-bold text-red-400">Rp 80.000</span>
              </li>
              <li className="flex justify-between items-center">
                <span>PT 10 Sesi + Free Member</span>
                <span className="font-bold text-white">Rp 700.000</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak & Operasional
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPointIcon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>
                  Jl. Kalikalapa RT 06/03, Sukaluyu, Telukjambe Timur, Karawang
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ClockCircleIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>Senin – Minggu: 08:00 – 22:00 WIB</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCallingIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>WhatsApp: {GYM_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>Instagram: {GYM_INFO.instagramHandle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SAIDE GYM Karawang. Semua hak cipta dilindungi.</p>
          <p className="text-[11px] text-zinc-600">
            Dibuat untuk memajukan komunitas olahraga sehat Karawang.
          </p>
        </div>
      </div>
    </footer>
  );
}

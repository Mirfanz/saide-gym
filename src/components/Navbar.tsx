"use client";

import React, { useState, useEffect } from "react";
import { GYM_INFO } from "@/data/gymData";
import { ClockCircleIcon } from "@solar-icons/react/linear/clock-circle";
import { HamburgerMenuIcon } from "@solar-icons/react/linear/hamburger-menu";
import { CloseCircleIcon } from "@solar-icons/react/linear/close-circle";
import { WhatsAppIcon, SaideGymLogo } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [gymOpenStatus, setGymOpenStatus] = useState({
    isOpen: true,
    text: "Buka Sekarang (08:00 - 22:00)",
  });

  useEffect(() => {
    // Check WIB time (UTC+7)
    const checkOpenStatus = () => {
      const now = new Date();
      // get UTC hours and add 7 for WIB
      const wibHour = (now.getUTCHours() + 7) % 24;
      if (wibHour >= GYM_INFO.openHour && wibHour < GYM_INFO.closeHour) {
        setGymOpenStatus({
          isOpen: true,
          text: "Buka Sekarang • Tutup 22:00 WIB",
        });
      } else {
        setGymOpenStatus({
          isOpen: false,
          text: "Tutup • Buka Kembali 08:00 WIB",
        });
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Fasilitas", href: "#fasilitas" },
    { name: "Paket Member", href: "#harga" },
    { name: "Personal Trainer", href: "#harga" },
    { name: "Ulasan (4.9⭐)", href: "#testimoni" },
    { name: "Lokasi & Peta", href: "#lokasi" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/85 border-b border-zinc-800/80 transition-all">
      {/* Top Notification Bar */}
      <div className="bg-zinc-900/90 border-b border-zinc-800/50 text-xs py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-zinc-400">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                gymOpenStatus.isOpen
                  ? "bg-emerald-400 animate-pulse"
                  : "bg-zinc-500"
              }`}
            />
            <span className="font-medium text-zinc-300 flex items-center gap-1.5">
              <ClockCircleIcon className="w-3.5 h-3.5 text-red-400" />
              {gymOpenStatus.text}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-400">
            <span>📍 Sukaluyu, Telukjambe Timur, Karawang</span>
            <a
              href={`https://wa.me/${GYM_INFO.phoneIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-semibold transition-colors flex items-center gap-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              {GYM_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
            <div className="absolute -inset-1 bg-red-600/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <SaideGymLogo className="w-10 h-10 drop-shadow-md relative z-10" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-white flex items-center gap-1">
              SAIDE <span className="text-red-500">GYM</span>
            </span>
            <span className="block text-[10px] tracking-widest text-zinc-400 uppercase -mt-1">
              Karawang Fitness
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-red-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
              "Halo Admin Saide Gym Karawang, saya ingin tanya info membership dan latihan hari ini.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md shadow-red-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 focus:outline-none flex items-center justify-center"
        >
          {isOpen ? (
            <CloseCircleIcon className="w-6 h-6 text-red-400" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:bg-zinc-900 hover:text-red-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
                "Halo Admin Saide Gym Karawang, saya ingin info pendaftaran member.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-red-600/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat Admin WhatsApp (081284182622)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

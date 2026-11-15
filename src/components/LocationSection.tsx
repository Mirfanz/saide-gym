import React from "react";
import { GYM_INFO } from "@/data/gymData";
import { MapPinIcon, ClockIcon, PhoneIcon, ArrowRightIcon } from "./Icons";

export default function LocationSection() {
  return (
    <section
      id="lokasi"
      className="py-20 lg:py-28 relative bg-zinc-950/60 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Location & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-emerald-400">
              <MapPinIcon className="w-3.5 h-3.5" />
              <span>Lokasi & Akses Mudah</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kunjungi Langsung{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
                SAIDE GYM Karawang
              </span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              Berlokasi strategis di kawasan Sukaluyu, Telukjambe Timur. Dekat
              dengan area perumahan warga dan mudah dijangkau dari kawasan
              industri Karawang.
            </p>

            {/* Address Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-emerald-400 flex-shrink-0 mt-0.5">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Alamat Lengkap
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    {GYM_INFO.address}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Patokan: Sukaluyu, Telukjambe Timur, Karawang.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-emerald-400 flex-shrink-0 mt-0.5">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Jam Operasional
                  </h4>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    Setiap Hari: 08:00 – 22:00 WIB
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    (Senin s/d Minggu tetap buka melayani Anda)
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-emerald-400 flex-shrink-0 mt-0.5">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Kontak WhatsApp Admin
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 font-semibold">
                    {GYM_INFO.phone} (0812-8418-2622)
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Fast response untuk info pendaftaran & jadwal.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="pt-2">
              <a
                href={GYM_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-400 hover:to-lime-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Map Embed Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-3 sm:p-4 shadow-2xl overflow-hidden">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80">
                <iframe
                  title="Peta Lokasi Saide Gym Karawang"
                  src="https://maps.google.com/maps?q=Saide+Gym+Sukaluyu+Karawang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) contrast(90%)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Overlay Location Badge on bottom of map */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-3.5 rounded-xl shadow-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-zinc-950 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      SG
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">SAIDE GYM</p>
                      <p className="text-[10px] text-zinc-400">
                        Jl. Kalikalapa RT 06/03 Sukaluyu
                      </p>
                    </div>
                  </div>
                  <a
                    href={GYM_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-bold underline flex-shrink-0"
                  >
                    Navigasi GPS
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

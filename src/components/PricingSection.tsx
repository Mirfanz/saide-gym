"use client";

import React, { useState } from "react";
import {
  GYM_INFO,
  MEMBERSHIP_PLANS,
  PT_PLANS,
  PricingPlan,
} from "@/data/gymData";
import { CheckIcon, WhatsAppIcon, SparklesIcon, DumbbellIcon } from "./Icons";

export default function PricingSection() {
  const [pricingType, setPricingType] = useState<"membership" | "pt">(
    "membership",
  );

  const plans: PricingPlan[] =
    pricingType === "membership" ? MEMBERSHIP_PLANS : PT_PLANS;

  return (
    <section id="harga" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-red-400">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Pricelist Resmi & Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Pilihan Paket Kebugaran{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-orange-400">
              Paling Hemat di Karawang
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Investasi kesehatan terbaik tanpa biaya tersembunyi. Pilih
            fleksibilitas harian, paket hemat bulanan, atau pendampingan
            personal trainer profesional.
          </p>

          {/* Pricing Switcher Toggle */}
          <div className="pt-6 flex justify-center">
            <div className="p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 inline-flex items-center gap-1 shadow-inner">
              <button
                type="button"
                onClick={() => setPricingType("membership")}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  pricingType === "membership"
                    ? "bg-red-600 text-white shadow-md shadow-red-600/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <DumbbellIcon className="w-4 h-4" />
                <span>Paket Membership</span>
              </button>

              <button
                type="button"
                onClick={() => setPricingType("pt")}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  pricingType === "pt"
                    ? "bg-red-600 text-white shadow-md shadow-red-600/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <SparklesIcon className="w-4 h-4" />
                <span>Personal Trainer (PT)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          className={`mt-12 grid gap-6 sm:gap-8 items-stretch ${
            pricingType === "membership"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          }`}
        >
          {plans.map((plan) => {
            const isHighlight = plan.popular;
            const waUrl = `https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
              plan.waMessage,
            )}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? "bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-2 border-red-500/80 shadow-2xl shadow-red-600/15 sm:-translate-y-2"
                    : "bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80"
                } p-6 sm:p-7`}
              >
                {/* Badge Top */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-black tracking-wide uppercase bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Title & Desc */}
                  <div className="border-b border-zinc-800 pb-5">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 min-h-[36px] line-clamp-2">
                      {plan.description}
                    </p>

                    {/* Price Header */}
                    <div className="mt-4">
                      {plan.originalPrice && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-zinc-500 line-through">
                            {plan.originalPrice}
                          </span>
                          {plan.savings && (
                            <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                              {plan.savings}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          {plan.priceDisplay}
                        </span>
                        <span className="text-xs text-zinc-400 font-medium">
                          / {plan.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="py-5 space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Benefit yang didapat:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug"
                        >
                          <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckIcon className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isHighlight
                        ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/25 hover:scale-[1.02]"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white hover:text-red-400 border border-zinc-700 hover:scale-[1.01]"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Callout Footer */}
        <div className="mt-12 rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <SparklesIcon className="w-5 h-5 text-red-400" />
              Ingin Trial Dulu atau Konsultasi Target Latihan?
            </h4>
            <p className="text-sm text-zinc-400">
              Datang langsung untuk visit harian Rp 15.000 atau hubungi Coach
              kami via WhatsApp untuk rekomendasi latihan yang tepat.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
                "Halo Coach Saide Gym, saya mau tanya rekomendasi paket latihan yang cocok untuk pemula.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 hover:text-red-400 text-white font-bold text-sm border border-zinc-700 flex items-center gap-2 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Tanya Coach Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

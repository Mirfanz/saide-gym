"use client";

import React, { useState } from "react";
import { FAQS, GYM_INFO } from "@/data/gymData";
import { ChevronDownIcon, SparklesIcon, WhatsAppIcon } from "./Icons";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-emerald-400">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Tanya Jawab</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="text-zinc-400 text-base">
            Semua yang perlu Anda ketahui sebelum memulai latihan di Saide Gym
            Sukaluyu Karawang.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/80 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 text-emerald-400 bg-emerald-500/10"
                        : ""
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3">
          <p className="text-sm text-zinc-300">
            Punya pertanyaan lain yang belum terjawab di sini?
          </p>
          <a
            href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
              "Halo Admin Saide Gym Karawang, saya mau tanya informasi tentang...",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat Langsung dengan Admin Saide Gym (081284182622) →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

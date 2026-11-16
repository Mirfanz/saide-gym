"use client";

import React, { useState } from "react";
import { GYM_INFO } from "@/data/gymData";
import { CalculatorMinimalisticIcon as CalculatorLinear } from "@solar-icons/react/linear/calculator-minimalistic";
import { CalculatorMinimalisticIcon as CalculatorBold } from "@solar-icons/react/bold/calculator-minimalistic";
import { DumbbellIcon } from "@solar-icons/react/bold/dumbbell";
import { WhatsAppIcon } from "./Icons";
import { MenIcon } from "@solar-icons/react/broken/men";
import { WomenIcon } from "@solar-icons/react/broken/women";
import { ShieldWarningIcon } from "@solar-icons/react/bold/shield-warning";

export default function BmiCalculator() {
  const [height, setHeight] = useState<string>("170");
  const [weight, setWeight] = useState<string>("65");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    color: string;
    advice: string;
    targetWorkout: string;
    gaugePercent: number;
  } | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) return;

    const heightInMeters = h / 100;
    const bmiValue = parseFloat(
      (w / (heightInMeters * heightInMeters)).toFixed(1),
    );

    // Calculate percentage for gauge bar (range: 15 to 35)
    const clampedPercent = Math.min(
      Math.max(((bmiValue - 15) / (35 - 15)) * 100, 4),
      96,
    );

    let cat = "Normal (Ideal)";
    let col = "text-emerald-400";
    let adv =
      "Tubuh Anda berada di rentang berat badan sehat! Fokus latihan terbaik Anda adalah Body Recomposition: membangun massa otot dan meningkatkan kepadatan fisik.";
    let workout = "Body Recomposition & Muscle Toning";

    if (bmiValue < 18.5) {
      cat = "Di Bawah Ideal (Underweight)";
      col = "text-blue-400";
      adv =
        "Berat badan Anda di bawah angka proporsional. Disarankan program Lean Bulking: latihan beban teratur dengan surplus kalori sehat dan asupan protein cukup.";
      workout = "Hypertrophy & Muscle Mass Building";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      cat = "Kelebihan Berat Badan (Overweight)";
      col = "text-amber-400";
      adv =
        "Anda memiliki potensi otot besar! Disarankan kombinasi angkat beban (Strength Training) dengan sesi Cardio 2-3x seminggu serta defisit kalori bertahap.";
      workout = "Fat Loss & Strength Conditioning";
    } else if (bmiValue >= 30) {
      cat = "Kategori Obesitas (Obese)";
      col = "text-rose-400";
      adv =
        "Sangat disarankan memulai latihan bertahap dengan bimbingan Coach Saide Gym agar gerakan aman untuk sendi dan program kardio terukur.";
      workout = "Guided Low-Impact Fat Loss & Mobility";
    }

    setResult({
      bmi: bmiValue,
      category: cat,
      color: col,
      advice: adv,
      targetWorkout: workout,
      gaugePercent: clampedPercent,
    });
  };

  return (
    <section id="kalkulator" className="py-14 sm:py-20 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-5 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-red-600/10 blur-[90px] pointer-events-none" />

          <div className="relative">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-[11px] sm:text-xs font-semibold border border-red-500/20">
                <CalculatorLinear className="w-3.5 h-3.5" />
                Kalkulator Kebugaran Gratis
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                Cek Skor BMI & Temukan Program Latihanmu
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Ketahui status komposisi tubuh Anda secara instan dan dapatkan
                rekomendasi bimbingan latihan di Saide Gym.
              </p>
            </div>

            {/* Input Form */}
            <form
              onSubmit={calculateBmi}
              className="mt-6 sm:mt-8 max-w-2xl mx-auto space-y-4 sm:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-zinc-300 mb-1.5">
                    Jenis Kelamin
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setGender("male")}
                      className={`gap-1 h-11 rounded-xl text-xs font-bold transition-all border flex items-center justify-center ${
                        gender === "male"
                          ? "bg-zinc-800 border-red-500 text-red-400 shadow-sm"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      Pria <MenIcon className="size-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender("female")}
                      className={`gap-1 h-11 rounded-xl text-xs font-bold transition-all border flex items-center justify-center ${
                        gender === "female"
                          ? "bg-zinc-800 border-red-500 text-red-400 shadow-sm"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      Wanita <WomenIcon className="size-3" />
                    </button>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-zinc-300 mb-1.5">
                    Tinggi Badan (cm)
                  </label>
                  <input
                    type="number"
                    inputMode="numeric"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Contoh: 170"
                    required
                    min={100}
                    max={250}
                    className="w-full h-11 px-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-red-500 focus:outline-none"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-zinc-300 mb-1.5">
                    Berat Badan (kg)
                  </label>
                  <input
                    type="number"
                    inputMode="numeric"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Contoh: 65"
                    required
                    min={30}
                    max={250}
                    className="w-full h-11 px-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 h-11 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-500 text-white font-black text-xs sm:text-sm shadow-md shadow-red-600/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {/* <CalculatorBold className="w-4 h-4" /> */}
                  <span>Hitung Status BMI Saya</span>
                </button>
              </div>
            </form>

            {/* Results Box with Visual Spectrum Gauge */}
            {result && (
              <div className="mt-6 sm:mt-8 p-4 sm:p-7 rounded-2xl bg-zinc-950/95 border border-zinc-800 space-y-4 sm:space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-zinc-800/80 pb-3 sm:pb-4 text-center sm:text-left">
                  <div>
                    <span className="text-[11px] sm:text-xs text-zinc-400">
                      Skor BMI Anda:
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-white">
                      {result.bmi}
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-[11px] sm:text-xs text-zinc-400">
                      Kategori Fisik:
                    </span>
                    <div
                      className={`text-base sm:text-lg font-black ${result.color}`}
                    >
                      {result.category}
                    </div>
                  </div>
                </div>

                {/* Visual Spectrum Bar Gauge */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-semibold px-0.5">
                    <span className="text-blue-400">Kurang (&lt;18.5)</span>
                    <span className="text-emerald-400">Ideal (18.5-24.9)</span>
                    <span className="text-amber-400">Kelebihan (25-29.9)</span>
                    <span className="text-rose-400">Obesitas (&ge;30)</span>
                  </div>

                  <div className="relative">
                    {/* The 4-segment colored bar */}
                    <div className="h-3.5 w-full rounded-full overflow-hidden flex shadow-inner bg-zinc-900 border border-zinc-800">
                      <div className="w-[20%] bg-blue-500/80" />
                      <div className="w-[35%] bg-emerald-500" />
                      <div className="w-[25%] bg-amber-500/90" />
                      <div className="w-[20%] bg-rose-500/90" />
                    </div>

                    {/* Gauge needle pin marker */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700 pointer-events-none"
                      style={{ left: `${result.gaugePercent}%` }}
                    >
                      <div className="w-5 h-5 rounded-full bg-white border-2 border-zinc-950 shadow-xl flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-wider">
                    <ShieldWarningIcon className="w-3.5 h-3.5" />
                    <span>Rekomendasi Program Gym:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {result.targetWorkout}
                  </p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                    {result.advice}
                  </p>
                </div>

                <div className="pt-2 flex justify-center sm:justify-start">
                  <a
                    href={`https://wa.me/${GYM_INFO.phoneIntl}?text=${encodeURIComponent(
                      `Halo Coach Saide Gym, saya baru cek BMI di website dengan hasil ${result.bmi} (${result.category}). Saya tertarik konsultasi program latihan "${result.targetWorkout}".`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-700 text-white font-bold text-xs sm:text-sm border border-zinc-700 transition-all hover:text-red-400 min-h-[44px]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>
                      Konsultasikan dengan Coach{" "}
                      <span className="hidden sm:inline">Saide Gym</span>
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

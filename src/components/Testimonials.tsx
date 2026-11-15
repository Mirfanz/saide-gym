import React from "react";
import { GYM_INFO, REVIEWS } from "@/data/gymData";
import { StarIcon } from "@solar-icons/react/bold/star";
import { CheckCircleIcon } from "@solar-icons/react/linear/check-circle";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs font-semibold text-amber-400">
            <StarIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Reputasi Google Maps 4.9 / 5.0</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Dipercaya & Disukai oleh{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
              Komunitas Fitness Karawang
            </span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-base lg:text-lg">
            Simak pengalaman langsung para member yang telah merasakan
            kenyamanan latihan, bimbingan ramah, dan hasil nyata di Saide Gym
            Sukaluyu.
          </p>

          {/* Social Proof Aggregate Meter */}
          <div className="pt-2 flex items-center justify-center gap-3 text-xs">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white hidden sm:block">
              4.9 dari 5.0
            </span>
            <span className="text-zinc-500 hidden sm:block">•</span>
            <span className="text-zinc-500 hidden sm:block">
              38+ Review Autentik Google Maps
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col justify-between space-y-4 sm:space-y-6 shadow-lg"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 flex items-center gap-1">
                    <CheckCircleIcon className="w-3 h-3 text-emerald-400" />
                    {review.source}
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm lg:text-base text-zinc-200 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info with Initial Avatar */}
              <div className="border-t border-zinc-800/80 pt-3 sm:pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${review.avatarColor} text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {review.author}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-red-400 font-medium">
                      {review.role}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs text-zinc-500">
                  {review.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href={GYM_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm transition-all shadow-md min-h-[44px]"
          >
            {/* <StarIcon className="w-4 h-4 text-amber-400" /> */}
            <span>Lihat Semua Ulasan di Google Maps (4.9 ⭐)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { StarIcon } from "@solar-icons/react/bold/star";
import { ClockCircleIcon } from "@solar-icons/react/bold-duotone/clock-circle";
import { WalletMoneyIcon } from "@solar-icons/react/bold-duotone/wallet-money";
import { UsersGroupRoundedIcon } from "@solar-icons/react/bold-duotone/users-group-rounded";
import { UsersGroupTwoRoundedIcon } from "@solar-icons/react/bold-duotone/users-group-two-rounded";

export default function StatsBar() {
  const stats = [
    {
      icon: <StarIcon className="w-5 h-5 text-amber-400" />,
      value: "4.9 / 5.0",
      label: "Rating Google Maps",
      desc: "38+ Ulasan Member",
    },
    {
      icon: <WalletMoneyIcon className="w-5 h-5 text-emerald-400" />,
      value: "Rp 15.000",
      label: "Visit Harian Terjangkau",
      desc: "Bebas Pakai Semua Alat",
    },
    {
      icon: <ClockCircleIcon className="w-5 h-5 text-red-400" />,
      value: "08:00 - 22:00",
      label: "Buka Setiap Hari",
      desc: "Senin s/d Minggu",
    },
    {
      icon: <UsersGroupTwoRoundedIcon className="w-5 h-5 text-rose-400" />,
      value: "100% Ramah",
      label: "Beginner Friendly",
      desc: "Coach Siap Membimbing",
    },
  ];

  return (
    <div className="relative border-y border-zinc-800 bg-zinc-950/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  {item.icon}
                </div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {item.value}
                </span>
              </div>
              <p className="text-sm font-semibold text-zinc-200">
                {item.label}
              </p>
              <p className="text-xs text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

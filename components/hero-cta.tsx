"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroCTA() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link
        href="https://vibebattle.live/waitlist"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 w-[260px] items-center justify-between rounded-[22px] bg-white px-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition hover:bg-blue-500"
      >
        <span
          className="text-[14px] font-semibold"
          style={{ color: "#000000", opacity: 1 }}
        >
          Join waitlist
        </span>

        <span
          className="flex h-8 w-8 items-center justify-center rounded-full"
          style={{ background: "rgba(0,0,0,0.08)" }}
        >
          <ArrowUpRight size={16} style={{ color: "#000000" }} />
        </span>
      </Link>

      <Link
        href="/seo"
        className="inline-flex h-14 w-[260px] items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.04] px-5 transition hover:bg-white/[0.08]"
      >
        <span className="text-[14px] font-semibold text-white">
          Explore more topics
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <ArrowUpRight size={16} className="text-white" />
        </span>
      </Link>
    </div>
  );
}

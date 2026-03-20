import Link from "next/link";
import { buttonPrimary, buttonSecondary, buttonIconWrap } from "@/components/button-styles";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type WaitlistLinkProps = {
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
};

export default function WaitlistLink({
  children,
  className = "",
  showIcon = false,
}: WaitlistLinkProps) {
  return (
    <Link
      href="https://vibebattle.live/waitlist"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        {showIcon ? <ArrowUpRight className="h-4 w-4" /> : null}
      </span>
    </Link>
  );
}

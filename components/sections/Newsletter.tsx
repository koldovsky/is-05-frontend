"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

function NewsletterIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 535 406"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="200" cy="380" rx="190" ry="14" fill="#E8E9F2" />
      <rect x="220" y="60" width="260" height="190" rx="8" fill="#F4F5FB" />
      <rect x="220" y="60" width="260" height="60" rx="8" fill="#2091F9" />
      <rect x="240" y="80" width="120" height="10" rx="3" fill="#FFFFFF" />
      <rect x="240" y="100" width="80" height="6" rx="2" fill="#C7E0FB" />
      <rect x="240" y="140" width="220" height="6" rx="2" fill="#D8DAE8" />
      <rect x="240" y="155" width="200" height="6" rx="2" fill="#D8DAE8" />
      <rect x="240" y="170" width="180" height="6" rx="2" fill="#D8DAE8" />
      <rect x="240" y="195" width="100" height="20" rx="6" fill="#2091F9" />
      <path d="M120 340 L120 250 Q120 230 140 230 L180 230 Q200 230 200 250 L200 340 Z" fill="#3A3744" />
      <circle cx="160" cy="200" r="34" fill="#FCD9C8" />
      <path d="M126 200 Q126 160 160 160 Q194 160 194 200 Q194 175 180 165 Q170 175 160 175 Q150 175 140 165 Q126 175 126 200 Z" fill="#2A2630" />
      <ellipse cx="155" cy="205" rx="2.5" ry="3" fill="#2A2630" />
      <ellipse cx="170" cy="205" rx="2.5" ry="3" fill="#2A2630" />
      <path d="M155 218 Q162 222 168 218" stroke="#2A2630" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="100" y="240" width="40" height="80" rx="14" fill="#3A3744" />
      <rect x="180" y="240" width="40" height="80" rx="14" fill="#3A3744" />
      <ellipse cx="120" cy="334" rx="22" ry="8" fill="#2A2630" />
      <ellipse cx="200" cy="334" rx="22" ry="8" fill="#2A2630" />
      <path d="M50 360 Q70 320 120 320" stroke="#2091F9" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="365" r="6" fill="#2091F9" />
      <path d="M380 280 Q420 250 470 280 Q480 295 470 310 Q420 330 380 310 Z" fill="#A1D6FF" />
      <circle cx="490" cy="80" r="8" fill="#FF6F91" />
      <circle cx="60" cy="120" r="6" fill="#A1D6FF" />
    </svg>
  );
}

export function Newsletter() {
  return (
    <section className="w-full bg-white px-5 py-20 md:py-44">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col items-center gap-10 md:flex-row md:gap-12">
        <div className="flex w-full max-w-[640px] items-end justify-center md:flex-1">
          <NewsletterIllustration className="w-full max-w-[535px]" />
        </div>

        <div className="flex w-full max-w-[480px] flex-col items-start gap-4">
          <h3 className="figmaland-h3">At your fingertips</h3>
          <h2 className="figmaland-h2 text-[34px] leading-[1.2] sm:text-[40px] md:text-figmaland-h2">
            Lightning fast
            <br />
            prototyping
          </h2>
          <h3 className="figmaland-h3 mt-6">Subscribe to our Newsletter</h3>
          <p className="figmaland-paragraph">
            Available exclusivery on Figmaland
          </p>

          <form
            className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              variant="soft"
              placeholder="Your Email"
              className="w-full sm:w-[273px]"
              aria-label="Your email"
            />
            <Button type="submit" className="px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useId, useState } from "react";

type BurgerMenuLink = {
  label: string;
  href: string;
};

type Props = {
  links: BurgerMenuLink[];
  className?: string;
  iconClassName?: string;
};

export function BurgerMenu({
  links,
  iconClassName = "h-8 w-10",
  className = "",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  return (
    <div className={`relative ${className}`.trim()}>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="inline-flex items-center justify-center text-white"
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg
          viewBox="0 0 40 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={iconClassName}
          aria-hidden="true"
        >
          <rect
            x="6"
            y={isOpen ? "15" : "6"}
            width="28"
            height="2.5"
            rx="1.25"
            fill="currentColor"
            className="origin-center transition-transform"
            transform={isOpen ? "rotate(45 20 16)" : undefined}
          />
          <rect
            x="6"
            y="15"
            width="28"
            height="2.5"
            rx="1.25"
            fill="currentColor"
            className="transition-opacity"
            opacity={isOpen ? "0" : "1"}
          />
          <rect
            x="6"
            y={isOpen ? "15" : "24"}
            width="28"
            height="2.5"
            rx="1.25"
            fill="currentColor"
            className="origin-center transition-transform"
            transform={isOpen ? "rotate(-45 20 16)" : undefined}
          />
        </svg>
      </button>

      <nav
        id={menuId}
        aria-label="Mobile navigation"
        className={`absolute right-0 top-full z-20 mt-4 w-56 rounded-2xl border border-white/10 bg-[#252b42]/95 p-4 shadow-[0_13px_19px_0_rgba(0,0,0,0.25)] backdrop-blur transition ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="figmaland-link block rounded-xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

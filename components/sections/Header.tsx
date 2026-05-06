import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#contact" },
];

function HamburgerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="6" width="28" height="2.5" rx="1.25" fill="currentColor" />
      <rect x="6" y="15" width="28" height="2.5" rx="1.25" fill="currentColor" />
      <rect x="6" y="24" width="28" height="2.5" rx="1.25" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="relative z-10 w-full text-white">
      <div className="mx-auto flex w-full max-w-[1210px] items-center justify-between px-4 py-6 md:hidden">
        <Logo priority />
        <button
          type="button"
          aria-label="Open menu"
          className="text-white"
        >
          <HamburgerIcon className="h-8 w-10" />
        </button>
      </div>

      <div className="relative mx-auto hidden w-full max-w-[1210px] items-center px-10 py-10 md:flex">
        <nav aria-label="Primary" className="flex items-center gap-[21px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="figmaland-link p-[10px] text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo priority />
        </div>

        <div className="ml-auto">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}

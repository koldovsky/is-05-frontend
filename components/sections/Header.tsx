import { BurgerMenu } from "@/components/ui/BurgerMenu";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="relative z-10 w-full text-white">
      <div className="mx-auto flex w-full max-w-[1210px] items-center justify-between px-4 py-6 md:hidden">
        <Logo priority />
        <BurgerMenu links={NAV_LINKS} />
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

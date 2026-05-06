import { Button } from "@/components/ui/Button";
import { Header } from "@/components/sections/Header";

export function Hero() {
  return (
    <section
      className="relative w-full bg-figmaland-dark text-white"
      style={{
        backgroundImage: "url('/figmaland/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-figmaland-dark/40" aria-hidden="true" />

      <div className="relative">
        <Header />

        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-5 pb-32 pt-12 text-center md:gap-10 md:pb-56 md:pt-20">
          <div className="flex flex-col items-center gap-2">
            <h1 className="figmaland-h1 text-white text-[44px] leading-[1.05] sm:text-[56px] md:text-figmaland-h1">
              The best products
              <br />
              start with Figma
            </h1>
            <p className="figmaland-h4 text-white/95 text-[18px] leading-7 sm:text-[22px] md:text-figmaland-h4">
              Most calendars are designed for teams.
              <br className="hidden md:block" />{" "}
              Slate is designed for freelancers
            </p>
          </div>

          <Button className="w-[236px] py-4">Try For Free</Button>
        </div>
      </div>
    </section>
  );
}

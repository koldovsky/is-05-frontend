import { Button } from "@/components/ui/Button";

export function Organize() {
  return (
    <section className="w-full bg-white px-5 py-24 md:px-20 md:py-40">
      <div className="mx-auto flex w-full max-w-[1276px] flex-col items-center gap-12 md:flex-row md:gap-12">
        <div className="flex w-full max-w-[480px] flex-col items-start gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="figmaland-h2 text-[34px] leading-[1.2] sm:text-[40px] md:text-figmaland-h2">
              Fastest way to
              <br />
              organize
            </h2>
            <p className="figmaland-h4 text-[18px] leading-7 sm:text-[22px] md:text-figmaland-h4">
              Most calendars are designed for teams.
              <br className="hidden md:block" />{" "}
              Slate is designed for freelancers
            </p>
          </div>

          <Button className="w-[236px] py-4">Try For Free</Button>
        </div>

        <div className="relative w-full max-w-[640px] flex-1">
          <div className="relative w-full">
            <div className="rounded-t-2xl border-[6px] border-b-0 border-[#9fa2a5] bg-black p-[6px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figmaland/screen-mask.png"
                alt="Macbook screen preview"
                className="block h-auto w-full rounded-md object-cover"
              />
            </div>
            <div className="relative h-3 w-full bg-[#bfc2c6]">
              <span className="absolute left-1/2 top-0 h-3 w-[14%] -translate-x-1/2 rounded-b-md bg-[#9fa2a5]" />
            </div>
            <div className="h-1 w-full bg-[#a0a3a8]" />
          </div>
        </div>
      </div>
    </section>
  );
}

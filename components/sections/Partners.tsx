import { Button } from "@/components/ui/Button";

type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

const PARTNERS: Partner[] = [
  { name: "Google", logo: "/figmaland/logo-google.svg", width: 193, height: 63 },
  { name: "Amazon", logo: "/figmaland/partner-amazon.png", width: 193, height: 58 },
  { name: "Microsoft", logo: "/figmaland/partner-microsoft.png", width: 221, height: 77 },
  { name: "Uber", logo: "/figmaland/partner-uber.png", width: 140, height: 77 },
  { name: "Dropbox", logo: "/figmaland/partner-dropbox.png", width: 229, height: 46 },
  { name: "Google", logo: "/figmaland/logo-google.svg", width: 193, height: 63 },
  { name: "Uber", logo: "/figmaland/partner-uber.png", width: 140, height: 77 },
  { name: "Amazon", logo: "/figmaland/partner-amazon.png", width: 193, height: 58 },
];

export function Partners() {
  return (
    <section className="w-full bg-white px-5 py-20">
      <div className="mx-auto flex w-full max-w-[1210px] flex-col items-center gap-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="figmaland-h2 text-[34px] leading-[1.2] sm:text-[40px] md:text-figmaland-h2">
            Partners
          </h2>
          <p className="figmaland-h4 mt-2 text-[18px] leading-7 sm:text-[22px] md:text-figmaland-h4">
            Most calendars are designed for teams.
            <br className="hidden md:block" />{" "}
            Slate is designed for freelancers
          </p>
        </div>

        <ul className="grid w-full grid-cols-2 gap-0 md:grid-cols-4">
          {PARTNERS.map((partner, idx) => (
            <li
              key={`${partner.name}-${idx}`}
              className="flex flex-col items-center justify-center gap-4 border border-[#d8d8d8] bg-white p-10 min-h-[152px]"
            >
              <span className="figmaland-h6">Client Name</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-auto max-h-[63px] w-auto max-w-[180px] object-contain"
              />
            </li>
          ))}
        </ul>

        <Button className="px-12 py-4">Try For Free</Button>
      </div>
    </section>
  );
}

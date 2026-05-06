import { SocialIcons } from "@/components/ui/SocialIcons";

type LinkColumn = {
  title: string;
  links: string[];
};

const COLUMNS: LinkColumn[] = [
  {
    title: "Pages",
    links: ["Home", "Product", "Pricing", "About", "Contact"],
  },
  {
    title: "Tomothy",
    links: [
      "Eleanor Edwards",
      "Ted Robertson",
      "Annette Russell",
      "Jennie Mckinney",
      "Gloria Richards",
    ],
  },
  {
    title: "Jane Black",
    links: [
      "Philip Jones",
      "Product",
      "Colleen Russell",
      "Marvin Hawkins",
      "Bruce Simmmons",
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#252b42] px-5 py-20 text-white md:py-32">
      <div className="mx-auto flex w-full max-w-[1210px] flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-32">
        <div className="flex flex-col gap-10 md:flex-row md:gap-8">
          {COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4 md:w-[170px]">
              <h3 className="figmaland-h3 text-white py-2">{column.title}</h3>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="figmaland-link text-white hover:opacity-80"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figmaland/icon-map.svg"
              alt=""
              width={36}
              height={46}
              className="h-[46px] w-auto"
            />
            <span
              className="font-figmaland-mobile text-[15px] leading-[27px] tracking-[0.2px] text-white"
            >
              7480 Mockingbird Hill undefined
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figmaland/icon-phone.svg"
              alt=""
              width={28}
              height={35}
              className="h-[35px] w-auto"
            />
            <span
              className="font-figmaland-mobile text-[15px] leading-[27px] tracking-[0.2px] text-white"
            >
              (239) 555-0108
            </span>
          </div>

          <div className="mt-4">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

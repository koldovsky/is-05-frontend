"use client";

import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { SocialIcons } from "@/components/ui/SocialIcons";

type ContactItem = {
  icon: string;
  alt: string;
  lines: string[];
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "/figmaland/icon-map.svg",
    alt: "Address",
    lines: ["6386 Spring St undefined Anchorage,", "Georgia 12473 United States"],
  },
  {
    icon: "/figmaland/icon-phone.svg",
    alt: "Phone",
    lines: ["(843) 555-0130"],
  },
  {
    icon: "/figmaland/icon-mail.svg",
    alt: "Email",
    lines: ["willie.jennings@example.com"],
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-white px-5 py-16 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1210px] flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="figmaland-h2 text-[34px] leading-[1.2] sm:text-[40px] md:text-figmaland-h2">
            Contact Us
          </h2>
          <p className="figmaland-h4 mt-2 text-[18px] leading-7 sm:text-[22px] md:text-figmaland-h4">
            Most calendars are designed for teams.
            <br className="hidden md:block" />{" "}
            Slate is designed for freelancers
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-12 md:flex-row md:items-start md:justify-between">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-[453px] flex-col gap-10 rounded-[20px] border border-[#dddddd] bg-white px-8 py-10 shadow-[0_13px_19px_0_rgba(0,0,0,0.07)] md:px-12 md:py-14"
          >
            <h3 className="figmaland-h3 text-center">Contact Us</h3>

            <Input
              type="text"
              variant="soft"
              placeholder="Your Name"
              aria-label="Your Name"
            />
            <Input
              type="email"
              variant="soft"
              placeholder="Your Email"
              aria-label="Your Email"
            />
            <Textarea
              variant="soft"
              placeholder="Your Message"
              aria-label="Your Message"
            />

            <Button type="submit" className="w-[145px]">
              Send
            </Button>
          </form>

          <div className="flex w-full max-w-[640px] flex-col gap-8 md:gap-12">
            <ul className="flex flex-col gap-6 md:flex-row md:items-start md:gap-4">
              {CONTACT_ITEMS.map((item) => (
                <li
                  key={item.alt}
                  className="flex flex-col items-start gap-2 md:items-center md:text-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt={item.alt}
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <div className="flex flex-col">
                    {item.lines.map((line) => (
                      <span key={line} className="figmaland-h6 leading-[23px]">
                        {line}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-[48px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figmaland/map-screen.jpg"
                alt="Map preview"
                className="h-auto w-full object-cover"
              />
            </div>

            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

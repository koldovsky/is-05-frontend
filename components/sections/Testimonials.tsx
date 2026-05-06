import { Button } from "@/components/ui/Button";

export function Testimonials() {
  return (
    <section className="w-full bg-white px-5 py-24">
      <div className="mx-auto flex w-full max-w-[1210px] flex-col items-center gap-20">
        <h2 className="figmaland-h2 text-[34px] leading-[1.2] sm:text-[40px] md:text-figmaland-h2">
          Testimonials
        </h2>

        <article className="flex max-w-[860px] flex-col items-center gap-12 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figmaland/logo-ibm.svg"
            alt="IBM"
            width={150}
            height={60}
            className="h-[60px] w-auto"
          />
          <p className="figmaland-h4 text-[18px] leading-7 sm:text-[22px] md:text-figmaland-h4">
            Most calendars are designed for teams. Slate is designed for
            freelancers
            <br className="hidden md:block" /> who want a simple way to plan
            their schedule.
          </p>

          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figmaland/avatar.jpg"
              alt="Customer avatar"
              width={50}
              height={50}
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <span className="figmaland-h6">Organize across</span>
              <span className="figmaland-link">Ui designer</span>
            </div>
          </div>
        </article>

        <Button className="px-12 py-4">More Testimonials</Button>
      </div>
    </section>
  );
}

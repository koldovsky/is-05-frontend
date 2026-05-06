type Feature = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: "/figmaland/feature-drawing.svg",
    iconAlt: "OpenType drawing icon",
    title: "OpenType features\nVariable fonts",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    icon: "/figmaland/feature-draw.svg",
    iconAlt: "Real data drawing icon",
    title: "Design with real data",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    icon: "/figmaland/feature-brush.svg",
    iconAlt: "Brush icon",
    title: "Fastest way to\ntake action",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
];

export function Features() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto flex w-full max-w-[1210px] flex-col items-center gap-20 px-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="figmaland-h2 text-[34px] leading-[1.2] sm:text-[40px] md:text-figmaland-h2">
            Features
          </h2>
          <p className="figmaland-h4 mt-2 text-[18px] leading-7 sm:text-[22px] md:text-figmaland-h4">
            Most calendars are designed for teams.
            <br className="hidden md:block" />{" "}
            Slate is designed for freelancers
          </p>
        </div>

        <ul className="grid w-full max-w-[900px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-13">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center gap-3 text-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.icon}
                alt={feature.iconAlt}
                width={61}
                height={61}
                style={{ width: 61, height: 61 }}
              />
              <h3 className="figmaland-h3 whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="figmaland-paragraph max-w-[255px]">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="relative w-full max-w-[1180px] overflow-hidden rounded-[22px] shadow-[0_8px_63px_0_rgba(0,0,0,0.15)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figmaland/video-screen.jpg"
            alt="Product screen preview"
            className="h-auto w-full object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figmaland/play-button.svg"
              alt=""
              width={120}
              height={120}
              className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[187px] md:w-[187px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

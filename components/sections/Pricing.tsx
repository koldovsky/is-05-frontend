import { Button } from "@/components/ui/Button";

type Plan = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "free",
    name: "FREE",
    description: "Organize across all\napps by hand",
    price: "0",
    features: [
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
    ],
  },
  {
    id: "standard",
    name: "STANDARD",
    description: "Organize across all\napps by hand",
    price: "10",
    features: [
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
    ],
    highlighted: true,
  },
  {
    id: "business",
    name: "BUSINESS",
    description: "Organize across all\napps by hand",
    price: "99",
    features: [
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
    ],
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const isHighlighted = plan.highlighted;
  const cardBg = isHighlighted ? "bg-figmaland-primary" : "bg-white";
  const titleColor = isHighlighted ? "text-white" : "text-figmaland-text";
  const descriptionColor = isHighlighted ? "text-white" : "text-figmaland-muted";
  const priceColor = isHighlighted ? "text-white" : "text-figmaland-text";
  const featureColor = isHighlighted ? "text-white" : "text-figmaland-text";

  return (
    <article
      className={`${cardBg} flex w-full max-w-[335px] flex-col items-center gap-8 rounded-[10px] border border-[#dedede] px-10 ${isHighlighted ? "py-[83px]" : "py-10"} shadow-[0_13px_19px_0_rgba(0,0,0,0.07)]`}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className={`figmaland-h3 ${titleColor}`}>{plan.name}</h3>
        <p className={`figmaland-h6 ${descriptionColor} whitespace-pre-line`}>
          {plan.description}
        </p>
      </div>

      <div className="flex h-[80px] items-start gap-2">
        <span
          className={`${priceColor} font-figmaland font-bold`}
          style={{
            fontSize: "74px",
            lineHeight: "84px",
            letterSpacing: "0.2px",
          }}
        >
          {plan.price}
        </span>
        <div className="flex flex-col">
          <span className={`figmaland-h3 ${priceColor}`}>$</span>
          <span className={`figmaland-h6 ${featureColor}`}>Per Month</span>
        </div>
      </div>

      <ul className="flex w-full flex-col items-center gap-2">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className={`figmaland-link ${featureColor} py-1`}
          >
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={isHighlighted ? "primary-on-dark" : "primary"}
        fullWidth
      >
        Order Now
      </Button>
    </article>
  );
}

export function Pricing() {
  return (
    <section className="w-full bg-figmaland-dark px-5 py-24" style={{ background: "#252b42" }}>
      <div className="mx-auto flex w-full max-w-[1210px] flex-col items-center gap-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="figmaland-h2 text-white text-[34px] leading-[1.2] sm:text-[40px] md:text-figmaland-h2">
            Pricing
          </h2>
          <p className="figmaland-h4 text-white mt-2 text-[18px] leading-7 sm:text-[22px] md:text-figmaland-h4">
            Most calendars are designed for teams.
            <br className="hidden md:block" />{" "}
            Slate is designed for freelancers
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-center md:gap-12">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

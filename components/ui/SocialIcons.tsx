type Network = "twitter" | "facebook" | "linkedin";

const NETWORKS: { id: Network; label: string; href: string; icon: string }[] = [
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com",
    icon: "/figmaland/icon-twitter.svg",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: "/figmaland/icon-facebook.svg",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/figmaland/icon-linkedin.svg",
  },
];

type Props = {
  size?: number;
  gap?: number;
  className?: string;
};

export function SocialIcons({ size = 41, gap = 24, className = "" }: Props) {
  return (
    <ul
      className={`flex items-center ${className}`.trim()}
      style={{ gap: `${gap}px` }}
    >
      {NETWORKS.map((network) => (
        <li key={network.id}>
          <a
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.label}
            className="inline-flex"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={network.icon}
              alt=""
              width={size}
              height={size}
              style={{ width: size, height: size }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline-light" | "primary-on-dark";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center font-figmaland text-figmaland-button rounded-figmaland-button px-figmaland-control-x py-figmaland-control-y transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-figmaland-primary disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  primary: "bg-figmaland-primary text-figmaland-inverse",
  "primary-on-dark": "bg-figmaland-inverse text-figmaland-primary",
  "outline-light":
    "bg-transparent border border-figmaland-inverse text-figmaland-inverse",
};

export function Button({
  variant = "primary",
  fullWidth,
  children,
  className = "",
  type = "button",
  ...rest
}: Props) {
  const widthClass = fullWidth ? "w-full" : "";
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

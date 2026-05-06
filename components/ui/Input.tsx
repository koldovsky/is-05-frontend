import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "soft";
};

const baseInputClasses =
  "w-full font-figmaland-mobile text-[15px] leading-4 tracking-[0.1px] text-figmaland-dark placeholder:text-figmaland-dark/70 border border-figmaland-border rounded-figmaland-input px-figmaland-input-x py-figmaland-input-y outline-none focus-visible:border-figmaland-primary focus-visible:ring-2 focus-visible:ring-figmaland-primary/30";

const variantBg: Record<NonNullable<InputProps["variant"]>, string> = {
  default: "bg-white",
  soft: "bg-[#f5f5f5]",
};

export function Input({
  variant = "default",
  className = "",
  ...rest
}: InputProps) {
  return (
    <input
      className={`${baseInputClasses} ${variantBg[variant]} ${className}`.trim()}
      {...rest}
    />
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: "default" | "soft";
};

export function Textarea({
  variant = "default",
  className = "",
  rows = 6,
  ...rest
}: TextareaProps) {
  const radiusOverride = "rounded-2xl";
  const base = baseInputClasses
    .replace("rounded-figmaland-input", radiusOverride)
    .replace("py-figmaland-input-y", "py-5");
  return (
    <textarea
      rows={rows}
      className={`${base} ${variantBg[variant]} resize-none ${className}`.trim()}
      {...rest}
    />
  );
}

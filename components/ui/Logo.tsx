import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: Props) {
  return (
    <Image
      src="/figmaland/logo-dark.png"
      alt="Figmaland"
      width={281}
      height={54}
      priority={priority}
      style={{ width: 186, height: "auto" }}
      className={className}
    />
  );
}

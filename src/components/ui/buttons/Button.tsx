import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";

import arrowPrimary from "@/assets/icons/arrow-primary.svg";
import arrowSecondaryDark from "@/assets/icons/arrow-secondary-dark.svg";
import arrowSecondary from "@/assets/icons/arrow-secondary.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "primary-outline" | "secondary" | "secondary-outline";
}

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  const getVariant = useMemo(() => {
    switch (variant) {
      case "primary-outline":
        return "bg-transparent text-primary border-2 border-primary hover:bg-[#f4e7ff]";
      case "secondary":
        return "bg-secondary text-primary border-0 shadow-button hover:bg-[#e2b728]";
      case "secondary-outline":
        return "bg-transparent text-secondary border-2 border-secondary hover:bg-[#faeec6]";
      case "primary":
      default:
        return "bg-primary text-secondary border-0 shadow-button hover:bg-[#300d4d]";
    }
  }, [variant]);

  const getArrow = useMemo(() => {
    switch (variant) {
      case "primary":
      case "secondary-outline":
        return arrowSecondary;
      case "primary-outline":
        return arrowPrimary;
      case "secondary":
        return arrowSecondaryDark;
      default:
        return arrowSecondary;
    }
  }, [variant]);

  return (
    <button
      {...props}
      className={`px-6 py-5 rounded-full ${className} ${getVariant} transition-all font-bold text-2xl leading-none tracking-wide flex items-center`}
    >
      {children && <span className="px-5">{children}</span>}
      <span>
        <Image
          src={getArrow}
          aria-hidden
          alt=""
          height={14}
          width={14}
          className="w-[.7em] h-[.7em]"
        />
      </span>
    </button>
  );
};

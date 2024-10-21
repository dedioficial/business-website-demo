import { ReactNode } from "react";

export const PreHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`block text-[#D97706] md:text-xl leading-none font-medium ${className}`}
      aria-label="Pre-heading"
    >
      {children}
    </span>
  );
};

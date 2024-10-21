import { ReactNode } from "react";

export const PreHeading = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className="block text-[#D97706] md:text-xl leading-none font-medium"
      aria-label="Pre-heading"
    >
      {children}
    </span>
  );
};

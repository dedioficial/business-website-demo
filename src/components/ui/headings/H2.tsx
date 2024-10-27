import { ReactNode } from "react";

export const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2
      className={`${className} md:text-[56px] text-[32px] leading-[1.1] md:font-extrabold font-bold`}
    >
      {children}
    </h2>
  );
};

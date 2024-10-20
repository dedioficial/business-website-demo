import { ReactNode } from "react";

export const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2 className={`${className} text-[56px] leading-tight font-extrabold`}>
      {children}
    </h2>
  );
};

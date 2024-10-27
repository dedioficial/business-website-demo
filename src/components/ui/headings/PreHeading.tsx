import * as motion from "framer-motion/client";
import { ReactNode } from "react";

export const PreHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      className={`block text-[#D97706] md:text-xl leading-none font-medium ${className} order-1`}
      initial={{
        opacity: 0,
        translateY: "25px",
        translateZ: 0,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        translateZ: 0,
      }}
      viewport={{
        once: true,
        amount: "all",
      }}
      transition={{
        duration: 0.7,
        delay: 0.4,
      }}
    >
      {children}
    </motion.span>
  );
};

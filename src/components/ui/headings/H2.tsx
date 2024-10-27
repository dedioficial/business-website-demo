import * as motion from "framer-motion/client";
import { ReactNode } from "react";

export const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <motion.h2
      className={`${className} md:text-[56px] text-[32px] leading-[1.1] md:font-extrabold font-bold order-2`}
      initial={{ translateX: "-20px", opacity: 0, translateZ: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        translateZ: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
    >
      {children}
    </motion.h2>
  );
};

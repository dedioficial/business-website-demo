import * as motion from "framer-motion/client";
import { ReactNode } from "react";

export interface ParagraphHeadingProps {
  children: ReactNode;
  className?: string;
}

const ParagraphHeading = ({ children, className }: ParagraphHeadingProps) => {
  return (
    <>
      <motion.p
        className={`md:text-xl md:leading-relaxed ${className} order-3`}
        initial={{
          opacity: 0,
          translateY: "-10px",
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
      </motion.p>
    </>
  );
};

export default ParagraphHeading;

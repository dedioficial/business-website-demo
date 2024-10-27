import * as motion from "framer-motion/client";
import { ReactNode } from "react";

export interface SectionHeadingGroupProps {
  children: ReactNode;
  className?: string;
}

const SectionHeadingGroup = ({
  children,
  className,
}: SectionHeadingGroupProps) => {
  return (
    <>
      <motion.div
        role="region"
        className={`flex flex-col gap-6 relative z-10 ${className}`}
        viewport={{
          once: true,
          amount: "all",
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SectionHeadingGroup;

import * as motion from "framer-motion/client";
import { useMemo } from "react";

interface PillProps {
  fill?: "orange" | "primary";
  className?: string;
  motionClassName?: string;
}

export const Pill = ({
  fill = "primary",
  className,
  motionClassName,
}: PillProps) => {
  const fillColor = useMemo(() => {
    switch (fill) {
      case "orange":
        return "#FBBF24";
      case "primary":
      default:
        return "#581C87";
    }
  }, [fill]);

  return (
    <motion.div
      aria-hidden
      initial={{
        scale: 0,
        rotate: 90,
        translateZ: 0,
      }}
      whileInView={{ scale: 1, rotate: 0, translateZ: 0 }}
      transition={{
        type: "spring",
        delay: 0.3,
      }}
      className={`${motionClassName}`}
      viewport={{
        once: true,
        amount: 1,
      }}
    >
      <span className={`w-[1147px] relative ${className}`} aria-hidden>
        <svg
          width="1147"
          viewBox="0 0 1 1001"
          className="w-full aspect-[1147/1001]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.0679 946.479C-164.249 1056.93 -408.886 991.386 -519.343 800.068C-629.8 608.751 -564.25 364.115 -372.933 253.657L-26.5221 53.6567C164.795 -56.8004 409.432 8.74977 519.892 200.067C630.342 391.385 564.792 636.021 373.479 746.478L27.0679 946.479Z"
            fill={fillColor}
          />
        </svg>
      </span>
    </motion.div>
  );
};

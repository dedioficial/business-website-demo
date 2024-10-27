import * as motion from "framer-motion/client";
import { useMemo } from "react";

interface CircleProps {
  fill?: "orange" | "primary" | "primary-light" | string;
  className?: string;
  motionClassName?: HTMLDivElement["className"];
}

export const Circle = ({
  fill = "orange",
  className,
  motionClassName,
}: CircleProps) => {
  const fillColor = useMemo(() => {
    switch (fill) {
      case "primary":
        return "#7E22CE";
      case "primary-light":
        return "#A252EE";
      case "orange":
        return "#F59E0B";
      default:
        return fill;
    }
  }, [fill]);

  return (
    <motion.div
      aria-hidden
      initial={{
        scale: 0,
        translateZ: 0,
      }}
      whileInView={{ scale: 1, translateZ: 0 }}
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
      <div className={`${className} relative`}>
        <svg
          className="w-full h-full"
          width={100}
          height={100}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={"50%"}
            cy={"50%"}
            r={"50%"}
            width={50}
            height={50}
            fill={fillColor}
          />
        </svg>
      </div>
    </motion.div>
  );
};

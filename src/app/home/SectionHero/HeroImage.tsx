import * as motion from "framer-motion/client";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <motion.div
      className="bg-[#BAE6FD] max-w-[673px] max-h-[694px] w-[50vw] max-lg:w-[80vw] aspect-[308/333] flex items-end max-lg:self-end"
      style={{
        maskImage: "url(/images/masks/vector-1.svg)",
        maskRepeat: "no-repeat",
        maskSize: "100%",
        maskPosition: "bottom",
      }}
      initial={{
        opacity: 0,
        translateX: "2rem",
        translateZ: 0,
      }}
      whileInView={{ opacity: 1, translateX: 0, translateZ: 0 }}
      transition={{
        duration: 0.9,
      }}
      viewport={{
        once: true,
      }}
    >
      <Image
        src="/images/pages/home/man-installing-sollar-panel.png"
        alt="A man installing a sollar panel"
        width={673}
        height={508}
        className="w-full"
        priority
      />
    </motion.div>
  );
};

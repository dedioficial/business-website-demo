import { ProfileCard } from "@/components/ui/ProfileCard";
import { Button } from "@/components/ui/buttons/Button";
import * as motion from "framer-motion/client";

export const HeroText = () => {
  const variants = {
    initial: { translateX: "-20px", opacity: 0, translateZ: 0 },
    animate: {
      translateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
      translateZ: 0,
    },
  };

  return (
    <div className="max-lg:order-2 pt-40 pb-20 px-20 max-lg:px-4 max-lg:py-12 max-lg:w-full">
      <motion.div
        className="m-auto max-w-[600px] flex flex-col gap-32 max-lg:gap-16"
        transition={{
          staggerChildren: 0.4,
        }}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <div className="flex flex-col gap-6 max-lg:text-center max-lg:items-center">
          <motion.h1
            className={`text-7xl max-md:text-[44px] font-extrabold max-w-3xl`}
            variants={variants}
          >
            Get the Sun to Power Your Home
          </motion.h1>

          <motion.p className="text-2xl max-md:text-lg" variants={variants}>
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </motion.p>

          <Button variant="primary-outline" className="w-fit">
            Request a Quote
          </Button>
        </div>

        <motion.article
          className="flex flex-col gap-4"
          aria-label="User review"
          variants={{
            initial: { opacity: 0, translateZ: 0 },
            animate: { opacity: 1, translateZ: 0 },
          }}
          transition={{
            duration: 1,
          }}
        >
          <p aria-label="User commentary" className="md:text-lg">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>
          <ProfileCard
            avatarSrc="/images/pages/home/thumbnails/rwanda-melflor.jpg"
            description="zerowaste.com"
            fullName="Rwanda Melflor"
          />
        </motion.article>
      </motion.div>
    </div>
  );
};

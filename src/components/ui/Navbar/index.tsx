import * as motion from "framer-motion/client";
import Image from "next/image";
import { NavContactActions } from "./NavContactActions";
import { Navlist } from "./Navlist";

export const Navbar = () => {
  return (
    <>
      <motion.header
        className="flex gap-10 absolute top-0 left-0 right-0 w-full px-20 max-[700px]:px-6 py-6 items-center z-50 max-w-fullhd m-auto"
        initial={{ opacity: 0, translateZ: 0 }}
        whileInView={{ opacity: 1, translateZ: 0 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          src="/images/logo/logotype.svg"
          alt="Sonner logotype"
          width={81}
          height={36}
          priority
        />

        <Navlist />

        <NavContactActions />
      </motion.header>
    </>
  );
};

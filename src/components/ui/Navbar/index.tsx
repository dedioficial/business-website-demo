import Image from "next/image";
import { NavContactActions } from "./NavContactActions";
import { Navlist } from "./Navlist";

export const Navbar = () => {
  return (
    <>
      <div className="flex gap-10 fixed top-0 left-0 right-0 w-full max-w-fullhd px-20 max-[700px]:px-6 py-6 items-center">
        <Image
          src="/images/logo/logotype.svg"
          alt="Sonner logotype"
          width={81}
          height={36}
          priority
        />

        <Navlist />

        <NavContactActions />
      </div>
    </>
  );
};

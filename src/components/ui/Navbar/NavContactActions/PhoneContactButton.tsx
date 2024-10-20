import headset from "@/assets/icons/headphone.svg";
import Image from "next/image";
import Link from "next/link";

export const PhoneContactButton = ({ className }: { className: string }) => {
  return (
    <Link
      href="tel:555818282"
      className={`flex gap-4 items-center text-[#0369A1] leading-none ${className}`}
      aria-label="Call us: 555 818 282"
    >
      <Image
        src={headset}
        alt="Phone icon"
        width={24}
        height={24}
        aria-hidden
      />

      <span aria-hidden>555 818 282</span>
    </Link>
  );
};

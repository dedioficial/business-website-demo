import Image from "next/image";

export const HeroImage = () => {
  return (
    <div
      className="bg-[#BAE6FD] max-w-[673px] max-h-[694px] w-[50vw] max-lg:w-[80vw] aspect-[308/333] flex items-end max-lg:self-end"
      style={{
        maskImage: "url(/images/masks/vector-1.svg)",
        maskRepeat: "no-repeat",
        maskSize: "100%",
        maskPosition: "bottom",
      }}
    >
      <Image
        src="/images/pages/home/man-installing-sollar-panel.png"
        alt="A man installing a sollar panel"
        width={673}
        height={508}
        className="w-full"
      />
    </div>
  );
};

import { Circle } from "@/components/assets/Circle";
import { H2 } from "@/components/ui/headings/H2";
import ParagraphHeading from "@/components/ui/headings/ParagraphHeading";
import { PreHeading } from "@/components/ui/headings/PreHeading";
import SectionHeadingGroup from "@/components/ui/headings/SectionHeadingGroup";
import Image from "next/image";

export const SectionPickSun = () => {
  return (
    <>
      <section
        id="pick-the-sun"
        className="m-auto px-20 max-md:px-6 md:py-20 py-12 text-center relative z-10 overflow-hidden"
      >
        <SectionHeadingGroup>
          <H2>Pick the Sun</H2>
          <PreHeading>No more waste</PreHeading>

          <ParagraphHeading className="max-w-[900px] m-auto">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A,
            donec ornare sed turpis pulvinar purus maecenas quam a. Erat
            porttitor pharetra sed in mauris elementum sollicitudin.
          </ParagraphHeading>
        </SectionHeadingGroup>

        <div className="relative w-fit m-auto">
          <Image
            src="/images/pages/home/screen-desktop.svg"
            alt="A desktop screen showing application features."
            width={1520}
            height={854}
            className="max-w-[1520px] w-full m-auto mt-20 relative z-10"
          />

          <Circle motionClassName="absolute -top-[17%] -left-[25%] w-[45%]" />
          <Circle
            fill="primary"
            motionClassName="absolute top-[5%] right-0 w-[38%]"
            className="translate-x-1/2"
          />
        </div>
      </section>
    </>
  );
};

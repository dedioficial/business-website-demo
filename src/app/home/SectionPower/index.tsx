import { Circle } from "@/components/assets/Circle";
import { Button } from "@/components/ui/buttons/Button";
import { H2 } from "@/components/ui/headings/H2";
import { PreHeading } from "@/components/ui/headings/PreHeading";
import SectionHeadingGroup from "@/components/ui/headings/SectionHeadingGroup";
import Image from "next/image";

const SectionPower = () => {
  return (
    <>
      <section className="bg-primary lg:bg-primary-light px-20 max-md:px-6 md:pt-20 md:pb-6 py-12 text-white relative overflow-hidden">
        <div className="flex flex-col gap-20 max-md:gap-10 m-auto max-w-fullhd">
          <div className="flex max-lg:flex-col max-lg:gap-4 relative z-10 items-center justify-center gap-60">
            <SectionHeadingGroup className="max-lg:gap-4 max-lg:text-center">
              <H2 className="max-w-[900px]">
                All the power that you need for your house is now available
              </H2>
              <PreHeading className="text-secondary">
                Get the Sun to power your home
              </PreHeading>
            </SectionHeadingGroup>

            <div className="flex flex-col gap-4 items-center">
              <Button variant="secondary-outline">Request a Quote</Button>

              <p>Egestas fringilla aliquam leo</p>
            </div>
          </div>

          <Image
            src="/images/pages/home/notebook.svg"
            alt="A notebook screen showing application features."
            width={1008}
            height={555}
            className="max-w-[1008px] w-full m-auto relative z-10"
          />
        </div>

        <Circle
          fill="primary-light"
          motionClassName="absolute lg:top-0 max-lg:bottom-0 lg:right-0 max-lg:left-0 max-lg:w-[100%] w-[45%] lg:origin-[70%_0] max-lg:origin-[0_100%]"
          className="-translate-y-1/2 translate-x-[10%] max-lg:-translate-x-1/2 max-lg:translate-y-1/2 "
        />
      </section>
    </>
  );
};

export default SectionPower;

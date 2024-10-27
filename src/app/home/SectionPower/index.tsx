import { Circle } from "@/components/assets/Circle";
import { Button } from "@/components/ui/buttons/Button";
import { H2 } from "@/components/ui/headings/H2";
import { PreHeading } from "@/components/ui/headings/PreHeading";
import Image from "next/image";

const SectionPower = () => {
  return (
    <>
      <section className="bg-primary lg:bg-primary-light px-20 max-md:px-6 md:pt-20 md:pb-6 py-12 text-white relative overflow-hidden">
        <div className="flex flex-col gap-20 max-md:gap-10 m-auto max-w-fullhd">
          <div className="flex max-lg:flex-col max-lg:gap-4 relative z-10 items-center justify-center gap-60">
            <div className="flex flex-col gap-6 max-lg:gap-4 relative z-10 max-lg:text-center">
              <PreHeading className="text-secondary">
                Get the Sun to power your home
              </PreHeading>
              <H2 className="max-w-[900px]">
                All the power that you need for your house is now available
              </H2>
            </div>

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
          className="absolute lg:top-0 lg:right-0 -translate-y-1/2 translate-x-[10%] max-lg:w-[100%] w-[45%] max-lg:bottom-0 max-lg:left-0 max-lg:-translate-x-1/2 max-lg:translate-y-1/2"
        />
      </section>
    </>
  );
};

export default SectionPower;

import { Pill } from "@/components/assets/Pill";
import { H2 } from "@/components/ui/headings/H2";
import { PreHeading } from "@/components/ui/headings/PreHeading";
import Image from "next/image";

const featuresList = [
  {
    title: "Erat sit",
    description:
      "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
  },
  {
    title: "Ullamcorper arcu",
    description:
      "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.",
  },
  {
    title: "Et pellentesque",
    description:
      "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
  },
  {
    title: "Amet egestas",
    description:
      "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.",
  },
];

export const SectionFeatures = () => {
  return (
    <section
      id="features"
      className="px-20 max-md:px-6 md:py-20 py-12 flex gap-16 xl:gap-20 2xl:gap-40 items-center m-auto max-w-fullhd max-lg:flex-col max-lg:text-center"
    >
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <PreHeading>System features</PreHeading>
            <H2>Powerful features</H2>
          </div>

          <p className="md:text-xl md:leading-9">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>

        <ul className="grid grid-cols-2 list-none gap-24 max-md:gap-12">
          {featuresList.map((item, i) => (
            <li key={i} className="flex flex-col gap-4">
              <span className="block font-bold text-xl md:text-2xl">
                {item.title}
              </span>
              <span className="block md:text-lg">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-visible">
        <Image
          src="/images/pages/home/mobile-screen-2.svg"
          alt="A mobile screen showing application features."
          width={554}
          height={900}
          className="w-auto max-md:max-h-[500px] h-[90vh] max-h-[900px] max-w-none relative z-10 max-lg:translate-x-[4%]"
        />

        <Pill
          className="absolute w-[250%] bottom-[10%] -left-[10%] max-lg:left-0"
          fill="orange"
        />
      </div>
    </section>
  );
};

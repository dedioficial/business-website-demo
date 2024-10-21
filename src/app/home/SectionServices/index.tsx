import { Pill } from "@/components/assets/Pill";
import { H2 } from "@/components/ui/headings/H2";
import { PreHeading } from "@/components/ui/headings/PreHeading";
import Image from "next/image";

const servicesList = [
  {
    title: "Et mauris",
    description:
      "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
  },
  {
    title: "Eget sit",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
  },
  {
    title: "Imperdiet pellentesque",
    description:
      "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
  },
  {
    title: "Non libero",
    description:
      "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
  },
];

export const SectionServices = () => {
  return (
    <section
      id="services"
      className="px-20 max-md:px-6 md:py-20 py-12 flex gap-16 xl:gap-20 2xl:gap-40 items-center m-auto max-w-fullhd max-lg:flex-col max-lg:text-center"
    >
      <div className="relative overflow-visible max-lg:order-2">
        <Image
          src="/images/pages/home/mobile-desktop.svg"
          alt="A mobile screen showing application features."
          width={554}
          height={900}
          className="w-auto max-md:max-h-[500px] h-[90vh] max-h-[900px] max-w-none relative z-10 max-lg:translate-x-[10%]"
        />

        <Pill className="absolute w-[200%] -top-[5%] right-[10%] max-lg:right-0" />
      </div>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <PreHeading>Services</PreHeading>
            <H2>Personalized Services</H2>
          </div>

          <p className="md:text-xl md:leading-9">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>

        <ul className="grid grid-cols-2 list-none gap-24">
          {servicesList.map((item, i) => (
            <li key={i} className="flex flex-col gap-4">
              <span className="block font-bold text-xl md:text-2xl">
                {item.title}
              </span>
              <span className="block md:text-lg">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

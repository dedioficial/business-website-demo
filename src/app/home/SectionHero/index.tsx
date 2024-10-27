import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";

export const SectionHero = () => {
  return (
    <section
      id="hero-section"
      className="flex max-lg:flex-col max-lg:gap-10 justify-between items-start max-w-fullhd m-auto"
    >
      <HeroText />
      <HeroImage />
    </section>
  );
};

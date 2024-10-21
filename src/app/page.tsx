import { SectionFeatures } from "./home/SectionFeatures";
import { SectionHero } from "./home/SectionHero";
import { SectionPickSun } from "./home/SectionPickSun";
import { SectionServices } from "./home/SectionServices";

export default function Home() {
  return (
    <main className="relative z-0">
      <SectionHero />
      <SectionPickSun />
      <SectionServices />
      <SectionFeatures />
    </main>
  );
}

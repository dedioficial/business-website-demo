import { SectionFeatures } from "./home/SectionFeatures";
import { SectionHero } from "./home/SectionHero";
import { SectionPickSun } from "./home/SectionPickSun";
import SectionPower from "./home/SectionPower";
import { SectionReviews } from "./home/SectionReviews";
import { SectionServices } from "./home/SectionServices";

export default function Home() {
  return (
    <main className="relative z-0">
      <SectionHero />
      <SectionPickSun />
      <SectionServices />
      <SectionFeatures />
      <SectionReviews />
      <SectionPower />
    </main>
  );
}

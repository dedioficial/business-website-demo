import { SectionHero } from "./home/SectionHero";
import { SectionPickSun } from "./home/SectionPickSun";

export default function Home() {
  return (
    <main className="relative z-0">
      <SectionHero />
      <SectionPickSun />
    </main>
  );
}

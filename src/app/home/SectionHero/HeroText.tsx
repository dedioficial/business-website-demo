import { ProfileCard } from "@/components/ui/ProfileCard";
import { Button } from "@/components/ui/buttons/Button";

export const HeroText = () => {
  return (
    <div className="max-lg:order-2 pt-40 pb-20 px-20 max-lg:px-4 max-lg:py-12 max-lg:w-full">
      <div className="m-auto max-w-[600px] flex flex-col gap-32 max-lg:gap-16">
        <div className="flex flex-col gap-6 max-lg:text-center max-lg:items-center">
          <h1 className={`text-7xl font-extrabold max-w-3xl`}>
            Get the Sun to Power Your Home
          </h1>

          <p className="text-2xl">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>

          <Button variant="primary-outline" className="w-fit">
            Request a Quote
          </Button>
        </div>

        <article className="flex flex-col gap-4" aria-label="User review">
          <p aria-label="User commentary">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>
          <ProfileCard
            avatarSrc="/images/pages/home/thumbnails/rwanda-melflor.jpg"
            description="zerowaste.com"
            fullName="Rwanda Melflor"
          />
        </article>
      </div>
    </div>
  );
};

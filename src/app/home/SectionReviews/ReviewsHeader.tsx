import { Button } from "@/components/ui/buttons/Button";
import { H2 } from "@/components/ui/headings/H2";
import { PreHeading } from "@/components/ui/headings/PreHeading";

export const ReviewsHeader = () => {
  return (
    <div className="flex max-lg:flex-col justify-between max-lg:gap-6 items-center">
      <div className="flex flex-col gap-6 relative z-10 max-w-[814px]">
        <PreHeading className="text-secondary">
          Join other Sun harvesters
        </PreHeading>
        <H2>Make something awesome</H2>

        <p className="md:text-xl md:leading-relaxed">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi tristique condimentum congue fusce nunc, donec magnis
          commodo.
        </p>
      </div>

      <Button variant="secondary-outline" className="h-fit whitespace-nowrap">
        Request a Quote
      </Button>
    </div>
  );
};

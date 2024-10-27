import { Button } from "@/components/ui/buttons/Button";
import { H2 } from "@/components/ui/headings/H2";
import ParagraphHeading from "@/components/ui/headings/ParagraphHeading";
import { PreHeading } from "@/components/ui/headings/PreHeading";
import SectionHeadingGroup from "@/components/ui/headings/SectionHeadingGroup";

export const ReviewsHeader = () => {
  return (
    <div className="flex max-lg:flex-col justify-between max-lg:gap-6 items-center">
      <SectionHeadingGroup className="max-w-[814px]">
        <H2>Make something awesome</H2>
        <PreHeading className="text-secondary">
          Join other Sun harvesters
        </PreHeading>

        <ParagraphHeading>
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi tristique condimentum congue fusce nunc, donec magnis
          commodo.
        </ParagraphHeading>
      </SectionHeadingGroup>

      <Button variant="secondary-outline" className="h-fit whitespace-nowrap">
        Request a Quote
      </Button>
    </div>
  );
};

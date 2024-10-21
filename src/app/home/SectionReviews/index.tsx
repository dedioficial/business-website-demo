import { ReviewsHeader } from "./ReviewsHeader";
import { ReviewsUsers } from "./ReviewsUsers";

export const SectionReviews = () => {
  return (
    <section className="bg-primary px-20 max-md:px-6 md:py-20 py-12  text-white">
      <div className="flex flex-col gap-20 max-md:gap-10 max-w-fullhd m-auto">
        <ReviewsHeader />
        <ReviewsUsers />
      </div>
    </section>
  );
};

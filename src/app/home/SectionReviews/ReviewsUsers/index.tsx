"use client";

import { Button } from "@/components/ui/buttons/Button";
import { TouchEvent, useCallback, useRef, useState } from "react";
import { CardUsers, CardUsersProps } from "./CardUsers";

const reviews: CardUsersProps[] = [
  {
    fullName: "Jane Cooper",
    comment:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    description: "10KWh",
    avatarSrc: "jane-cooper.jpg",
  },
  {
    fullName: "Ralph Edwards",
    comment:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    description: "32KWh",
    avatarSrc: "ralph-edwards.jpg",
  },
  {
    fullName: "Courtney Henry",
    comment:
      "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    description: "6KWh",
    avatarSrc: "courtney-henry.jpg",
  },
  {
    fullName: "Cameron Williamson",
    comment:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    description: "12KWh",
    avatarSrc: "cameron-williamson.jpg",
  },
  {
    fullName: "Cameron Williamson",
    comment:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    description: "12KWh",
    avatarSrc: "cameron-williamson.jpg",
  },
];

export const ReviewsUsers = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const touchStartX = useRef(0);

  const xPosition = active * (100 / reviews.length);

  const nextItem = useCallback(() => {
    if (active + 1 > reviews.length - 1) return;

    setActive((a) => a + 1);
  }, [active]);

  const previousItem = useCallback(() => {
    if (active - 1 < 0) return;

    setActive((a) => a - 1);
  }, [active]);

  const onTouchStart = (event: TouchEvent<HTMLUListElement>) => {
    touchStartX.current = event.changedTouches[0].screenX;
  };

  const onTouchEnd = (event: TouchEvent<HTMLUListElement>) => {
    const touchEnd = event.changedTouches[0].screenX;

    if (touchEnd < touchStartX.current) {
      nextItem();
    } else if (touchEnd > touchStartX.current) {
      previousItem();
    }
  };

  return (
    <>
      <ul
        className="flex gap-6 items-center transition-all duration-700 h-[490px] whitespace-nowrap w-fit"
        style={{ transform: `translateX(-${xPosition}%)` }}
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {reviews.map(({ avatarSrc, ...user }, i) => (
          <li key={i} className="whitespace-normal">
            <CardUsers
              {...user}
              avatarSrc={`/images/pages/home/thumbnails/${avatarSrc}`}
              active={i === active}
              onClick={() => setActive(i)}
            />
          </li>
        ))}
      </ul>

      <div className="flex gap-6 max-md:justify-center">
        <Button
          variant="secondary-outline"
          aria-label="Highlight previous review"
          title="Highlight previous review"
          arrowLeft
          onClick={previousItem}
          className="max-md:!p-4"
        />
        <Button
          variant="secondary-outline"
          aria-label="Highlight next review"
          title="Highlight next review"
          className="max-md:!p-4"
          onClick={nextItem}
        />
      </div>
    </>
  );
};

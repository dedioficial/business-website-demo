import {
  ProfileCard,
  type ProfileCardProps,
} from "@/components/ui/ProfileCard";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import CSS from "./CardUsers.module.css";

export interface CardUsersProps extends ProfileCardProps {
  active?: boolean;
  comment: string;
  onClick?: () => void;
}

export const CardUsers = ({
  active,
  comment,
  onClick,
  fullName,
  ...props
}: CardUsersProps) => {
  return (
    <article
      className={`w-[364px] max-md:w-[75vw] ${
        active ? "py-16" : "py-9"
      } bg-white border transition-all duration-700 rounded-[10px] cursor-pointer flex items-start justify-end flex-col p-8 gap-6 text-main ${
        CSS.card_users
      }`}
      aria-label={`Review by ${fullName}`}
      onClick={onClick}
    >
      <BsChatLeftQuoteFill
        className="text-primary-light text-5xl opacity-45"
        aria-label="An icon of comment"
      />

      <p className="md:text-lg leading-7">{comment}</p>

      <ProfileCard
        fullName={fullName}
        {...props}
        thumbClassName="max-md:!w-12 max-md:!h-12"
        nameClassName="max-md:text-base"
        descriptionClassName="max-md:text-sm"
        aria-label={""}
        nameAriaHidden={true}
        descriptionAriaLabel={"Energy saved"}
      />
    </article>
  );
};

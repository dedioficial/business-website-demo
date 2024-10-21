import Image from "next/image";

export interface ProfileCardProps {
  avatarSrc: string;
  fullName: string;
  description: string;
  thumbClassName?: string;
  nameClassName?: string;
  descriptionClassName?: string;
  "aria-label"?: string;
  nameAriaHidden?: boolean;
  descriptionAriaLabel?: string;
}

export const ProfileCard = ({
  avatarSrc,
  fullName,
  description,
  thumbClassName,
  nameClassName,
  descriptionClassName,
  nameAriaHidden,
  descriptionAriaLabel,
  ...props
}: ProfileCardProps) => {
  return (
    <div
      className="flex gap-4 items-center"
      aria-label={props["aria-label"] || "User information"}
    >
      <Image
        src={avatarSrc}
        alt={`User thumbnail of ${fullName}`}
        width={64}
        height={64}
        className={`rounded-full ${thumbClassName}`}
      />

      <div className="flex gap-1 flex-col">
        <div
          className={`text-lg ${nameClassName}`}
          aria-hidden={nameAriaHidden ?? undefined}
        >
          {fullName}
        </div>
        <div
          className={`text-lg leading-tight text-[#475569] ${descriptionClassName}`}
          aria-label={descriptionAriaLabel ?? "Extra description"}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

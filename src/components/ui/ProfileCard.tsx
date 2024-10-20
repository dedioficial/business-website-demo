import Image from "next/image";

interface ProfileCard {
  avatarSrc: string;
  fullName: string;
  description: string;
}

export const ProfileCard = ({
  avatarSrc,
  fullName,
  description,
}: ProfileCard) => {
  return (
    <div className="flex gap-4 items-center" aria-label="User informations">
      <Image
        src={avatarSrc}
        alt={`User thumbnail of ${fullName}`}
        width={64}
        height={64}
        className="rounded-full"
      />

      <div className="flex gap-1 flex-col">
        <div className="text-lg" aria-label="User name">
          {fullName}
        </div>
        <div
          className="text-lg leading-tight text-[#475569]"
          aria-label="Extra description"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

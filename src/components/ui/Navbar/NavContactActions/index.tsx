import { Button } from "../../buttons/Button";
import { PhoneContactButton } from "./PhoneContactButton";

export const NavContactActions = () => {
  return (
    <div className="flex gap-10 ms-auto">
      <PhoneContactButton className={`max-[870px]:hidden`} />

      <Button variant="primary-outline" className={`max-[1200px]:hidden`}>
        Request a Quote
      </Button>
    </div>
  );
};

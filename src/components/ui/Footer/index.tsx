import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className=" bg-white">
        <div className="flex max-md:flex-col max-md:text-center px-20 py-6 max-w-fullhd gap-4 items-center m-auto ">
          <Image
            height={32}
            width={126}
            alt="Sonner logo"
            src="/images/logo/logo.svg"
          />

          <p>@ 2023 Soller, Inc. All rights reserved.</p>

          <ul className="list-none flex justify-center gap-6 md:ml-auto ">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Support</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

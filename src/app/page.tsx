import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full flex items-center justify-center flex-col gap-10 text-center">
      <Image
        src={"/images/logo/logo.svg"}
        alt="Sollar logo"
        className="max-w-96 h-auto"
        width={400}
        height={100}
        style={{
          width: "auto",
          height: "auto",
        }}
      />

      <h1 className={`text-7xl font-extrabold max-w-3xl`}>
        Get the Sun to Power Your Home
      </h1>

      <h2 className={`text-2xl font-semibold `}>Soon...</h2>
    </main>
  );
}

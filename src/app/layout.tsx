import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soller",
  description: "Get the Sun to Power Your Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} className=" overflow-x-hidden">
      <body
        className={`${roboto.className} ${roboto.className} relative overflow-x-hidden`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

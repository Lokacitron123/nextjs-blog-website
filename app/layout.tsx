import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { MyProfilePic } from "./components/MyProfilePic";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata: Metadata = {
  title: "Johans's blog",
  description: "Generated by Johan Lindell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto_init.className} dark:bg-slate-800`}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}

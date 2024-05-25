import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata: Metadata = {
  title: "Johans's blog",
  description: "Created by Johan Lindell",
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

        <main className='px-4 md:px-6 mx-auto prose prose-xl prose-slate dark:prose-invert'>
          {children}
        </main>
      </body>
    </html>
  );
}

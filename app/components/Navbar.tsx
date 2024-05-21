import { Facebook, Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className='bg-slate-600 p-4 flex justify-evenly items-center flex-col md:flex-row sticky top-0 drop-shadow-xl dark:text-white'>
      <h1 className='text-3xl font-bold  grid place-content-center mb-2 md:mb-0'>
        <Link href={"/"}>Next.js Blog</Link>
      </h1>
      <nav className='flex gap-3 justify-evenly flex-col md:flex-row'>
        <ul aria-label='Navigational links list' className='flex gap-3 '>
          <li>
            <Link
              href={"/"}
              className='text-xl text-white/90 no-underline hover:text-white'
            >
              Home
            </Link>
          </li>
        </ul>
        <ul
          aria-label='Social media list'
          className='flex flex-row justify-center sm:justify-evenly align-middle gap-4'
        >
          <li>
            <Link
              className='text-white/90 hover:text-white'
              href={"https://linkedin.com"}
            >
              {<LinkedinIcon />}
            </Link>
          </li>
          <li>
            <Link
              className='text-white/90 hover:text-white'
              href={"https://facebook.com"}
            >
              {<Facebook />}
            </Link>
          </li>
          <li>
            <Link
              className='text-white/90 hover:text-white'
              href={"https://github.com"}
            >
              {<Github />}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

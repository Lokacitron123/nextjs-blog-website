import Posts from "./components/Posts";
import { MyProfilePic } from "./components/MyProfilePic";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className='mx-auto'>
      <MyProfilePic />
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I&apos;m <span className='font-bold'>Johan</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}

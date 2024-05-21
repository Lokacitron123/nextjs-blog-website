import getFormattedDate from "@/lib/getFormattedData";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

// Makes the page a staticically rendered page - SSG instead of SSR
// We do this when we know what the data will be
export function generateStaticParams() {
  const posts = getSortedPostsData(); // Deduped

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // Deduped
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post?.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // Deduped
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);
  return (
    <main className='px-6 w-full mx-auto dark:text-white'>
      <article className='mt-5 max-w-3xl mx-auto flex flex-col gap-3 '>
        <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
        <p className='mt-0'>{pubDate}</p>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/' className='text-white/90 hover:text-white'>
            ← Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}

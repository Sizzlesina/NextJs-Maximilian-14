import { Suspense } from "react";

import Posts from "@/components/Post";
import { getPosts } from "@/lib/posts";

// Static metadata
export const metadata = {
  title: "Latest Posts",
  description: "Browse out latest posts!",
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id='latest-posts'>
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}

import Head from "next/head";
import { useEffect, useState } from "react";
import { PostCard, PostWidget, Categories } from "../components";
import { getPost } from "../services/getPost";

export default function Home({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Graph CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts?.map((post: any, idx: number) => (
              <PostCard key={idx} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPost()) || [];

  return {
    props: { posts },
  };
}

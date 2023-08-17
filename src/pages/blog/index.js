import Head from "next/head";
import Article from "../../components/Article";
import { getAllPosts } from "../../../lib/api";

export async function getStaticProps() {
  // Get all posts
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className="h-full md:min-h-[650px]">
      <Head>
        <title>Ricardo Blog</title>
        <meta name="description" content="Blog de Ricardo | RHzx0r" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 p-4">📃 Blog</h1>
          {posts.map((post) => (
            <Article key={post.slug} className="border-b-2" post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

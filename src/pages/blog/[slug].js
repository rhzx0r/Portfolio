import md from "markdown-it";
import { getAllPosts, getPostBySlug } from "../../../lib/api";

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug);
  return {
    props: post,
  };
}

function readingTime(content) {
  const text = content;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export default function PostPage({ frontmatter, content }) {
  const time = readingTime(content);

  return (
    <section className="px-6 dark:bg-slate-300">
      <div className="max-w-4xl mx-auto py-12  rounded-lg">
        <div className="prose lg:prose-xl mx-auto">
          <h2 className="!mb-0">{frontmatter.title}</h2>
          <div className="flex justify-between">
            <p className="text-base">⌛ {time} minutos de lectura</p>
            <p className="text-base ">📆 {frontmatter.date}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          <div className="border-t-2 pt-2">
            <span className="text-base font-semibold ">
              🏷️ Tags: {frontmatter.tags.map((tag) => tag).join(", ")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

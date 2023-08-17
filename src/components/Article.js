import Link from "next/link";

export default function Article({post, className = 'rounded-lg'}) {
  return (
    <article className={`bg-white shadow-md dark:shadow-none dark:bg-slate-800 p-4 ${className}`}>
      <Link href={`blog/${post.slug}`}>
      <h3 className="text-2xl mb-2 font-medium">
        {post.title}
      </h3>
      </Link>
      <span className="text-gray-600 dark:text-gray-400  mb-4 block">
        {post.date} | {post.tags.map((tag) => tag).join(', ')}
      </span>
      <p>
        {post.description}
      </p>
    </article>
  )
}
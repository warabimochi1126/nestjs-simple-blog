import { PostType } from "@/utils/Types";
import { getAllPosts } from "@/utils/api";
import Link from "next/link";

export default async function Home() {
  const posts: PostType[] = await getAllPosts();

  return (
    <div className="container">
      <h1>Nest.js blog</h1>
      <ul className="postList">
        { posts.map((post: PostType) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <li className="post">
                <h2 className="title">{post.title}</h2>
                <p className="author">By {post.author}</p>
              </li>
            </Link>
        ))}
      </ul>
    </div>
  );
}

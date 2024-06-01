import { PostType } from "@/utils/Types";
import { getAllPosts } from "@/utils/api";

export default async function Home() {
  const posts: PostType[] = await getAllPosts();

  return (
    <div className="container">
      <h1>Nest.js blog</h1>
      <ul className="postList">
        { posts.map((post: PostType) => (
          <li className="post" key={post.id}>
            <h2 className="title">{post.title}</h2>
            <p className="author">By {post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

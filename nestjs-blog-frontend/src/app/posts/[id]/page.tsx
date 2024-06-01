import { PostType } from "@/utils/Types"
import { getPostById } from "@/utils/api"

interface PostProps {
    params: {
        id: string;
    }
}

export default async function Post({ params }: PostProps) {
    const post: PostType = await getPostById(params.id);

    return (
        <div className="container">
            <h1 className="title">{ post.title }</h1>
            <p className="content">{ post.content }</p>
            <p className="meta">Author: { post.author }</p>
            <p className="meta">Created At: { post.createdAt }</p>
        </div>
    )
}
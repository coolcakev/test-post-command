import React from 'react';
import CommentItem, {Comment} from "@/components/comment-item";
import useFetch from "@/app/hooks/useFetch";

interface Post {
    id: number
    title: string
    body: string
}

const postsApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

export default async function PostPage({params}: { params: { id: string } }) {

    const post = await useFetch<Post>(`${postsApiUrl}/${params.id}`)
    const comments = await useFetch<Comment[]>(`${postsApiUrl}/${params.id}/comments`)

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">{post.title.toUpperCase()}</h1>
            <p className="mb-6 text-center">{post.body}</p>

            <h2 className="text-2xl font-bold my-8">COMMENTS</h2>

            <div className="grid grid-cols-3 gap-4">
                {comments.map((comment) => (<CommentItem key={comment.id}  comment={comment}/>))}
            </div>

        </div>
    );
}

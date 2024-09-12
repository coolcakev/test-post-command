import React from 'react';
import {PostModel} from "@/app/page";
import useFetch from "@/app/hooks/useFetch";
import PostItemWrapper from "@/components/post-item/post-item-wrapper";

interface PostItemProps {
    post: PostModel
}

interface User{
    id: number,
    name: string,
    username: string
    email: string
}

const PostItem = async(props: PostItemProps) => {
    const {post} = props
    const user =  await useFetch<User>(`https://jsonplaceholder.typicode.com/users/${post.userId}`)

    return (
        <PostItemWrapper postId={post.id}>
            <div className="flex justify-between gap-4">
                <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">{post.title}</p>
                <p>{user?.username}</p>
            </div>
            <div className="mt-3 text-ellipsis overflow-hidden whitespace-nowrap">{post.body}</div>
        </PostItemWrapper>
    );
};

export default PostItem;
'use client';
import React from 'react';
import {useRouter} from "next/navigation";
import RoundedBlockWrapper from "@/components/rounded-block-wrapper";

interface PostItemProps {
    postId: number
    children: React.ReactNode
}

const PostItemWrapper = (props: PostItemProps) => {
    const {postId, children} = props
    const router = useRouter()

    const handleClick = () => {
        router.push(`/posts/${postId}`)
    }

    return (
        <RoundedBlockWrapper children={children} onClick={handleClick} className="cursor-pointer"/>
    );
};

export default PostItemWrapper;
import React from 'react';
import RoundedBlockWrapper from "@/components/rounded-block-wrapper";

export interface Comment {
    id: number
    name: string
    body: string
    email: string
}

interface CommentItemProps {
    comment: Comment
}

const CommentItem = (props: CommentItemProps) => {
    const {comment} = props
    return (
        <RoundedBlockWrapper>
            <div className="flex justify-between mb-3">
                <div className="font-bold text-[16px]">{comment.name}</div>
                <div>{comment.email}</div>
            </div>
            <div>{comment.body}</div>


        </RoundedBlockWrapper>
    );
};

export default CommentItem;
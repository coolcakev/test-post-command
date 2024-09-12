import React from 'react';

interface RoundedBlockWrapperProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

const RoundedBlockWrapper = (props: RoundedBlockWrapperProps) => {
    const {children, className, onClick} = props

    return (
        <div className={`py-2 px-4 bg-gray-300 dark:bg-gray-700 rounded-2xl ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default RoundedBlockWrapper;
import PostItem from "@/components/post-item/post-item";

export interface PostModel{
    id: number
    title: string
    userId: number
    body: string
}

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const posts = await res.json();

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <div className="grid grid-cols-3 gap-4">
                {posts.map((post: PostModel) => (<PostItem key={post.id} post={post}/>))}
            </div>
        </main>

    );
}

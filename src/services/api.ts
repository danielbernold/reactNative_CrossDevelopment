import { Post } from "src/types/post";

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok)
    { throw new Error("Failed to load posts");}
    
    return await response.json();
}
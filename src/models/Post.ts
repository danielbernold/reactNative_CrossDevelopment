export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    liked?: boolean;
}
"use client"
import { create } from "zustand";


type Blog = {
    id: number;
    cover_photo: string;
    description: string;
    content: string;
    published_on: string;
    slug: string;
    title: string;
    author: string;
}

interface BlogData {
    blogData: Blog[]; 
    updateBlogData: (data: any) => void;
}

export const BlogDataContext = create<BlogData>((set) =>({
    blogData: [],
    updateBlogData: (data) => {
            set({blogData: data})
        },
}))
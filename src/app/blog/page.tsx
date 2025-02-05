"use client";

import GuestLayout from '@/components/layouts/GuestLayout';
import scheduleImg from "../../../public/images/scheduling.jpg";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {BlogDataContext} from "../../providers/blog-data-provider"
import Posts from './posts';



function Blog() {
    const [isLoading, setIsLoading] = useState(true);
   const updateBlogData = BlogDataContext.getState().updateBlogData
   const data = BlogDataContext.getState().blogData;



    async function fetchBlogs() {
        const API_URL = "https://api.calendive.com/api/get-blogs";

        try {
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const blogs = result?.data[0]?.blogs;
            updateBlogData(blogs);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
            <GuestLayout>
                <div className="flex flex-col items-center mb-16">
                    <div className="h-[300px] w-[100%] relative flex flex-col items-center justify-center">
                        <Image
                            src={scheduleImg}
                            alt="headerImg"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-[black] bg-opacity-80"></div>
                        <h1 className='absolute text-white text-[35px]'>Blog Posts</h1>
                    </div>

                    <div className="mt-36 px-[10px] md:px-[50px] lg:px-[100px] flex flex-col items-center">
                        <div className="w-full">
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold">Posts</h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    A must read for you
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {!isLoading ? (
                                    <Posts data={data}/>
                                ) : (

                                    Array.from({ length: 5 }).map((_, index) => (
                                        <div key={index} className="w-full bg-gray-200 animate-pulse shadow-md rounded-lg p-4 
                                    duration-200 group">
                                            <div className="h-[250px] w-[300px] bg-gray-300"></div>
                                            <div className="mt-4 h-6 w-3/4 bg-gray-400"></div>
                                            <div className="mt-2 h-4 w-1/2 bg-gray-300"></div>
                                            <div className="mt-4 h-10 w-32 bg-gray-400 rounded"></div>
                                        </div>
                                    )
                                    ))}

                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
    );
}

export default Blog;
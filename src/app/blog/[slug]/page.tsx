"use client"

import React, { useEffect } from 'react'
import { BlogDataContext } from '@/providers/blog-data-provider'
import GuestLayout from '@/components/layouts/GuestLayout'
import Image from 'next/image'
import Posts from '../posts'
import { formatDate } from '../date-format'

interface propType {
    params: any
}

const BlogPost: React.FC<propType> = ({ params }) => {

    const data = BlogDataContext.getState().blogData;

    const info = params.slug
    const blogData = data.filter(data => data.slug === info)
    const blogPostData = blogData[0];
    const filteredData = data.filter(data => data.slug !== info)

    

    return (
        <GuestLayout>
            <div className='lg:px-32 md:px-16 px-4 '>
                <h1 className='my-12  md:text-[35px] text-[25px] text-left'>{blogPostData?.title}</h1>
                <Image src={blogPostData?.cover_photo} className='w-[100%] md:h-[700px] h-[500px] object-cover' alt='cover photo' priority height={100} width={200} />


                <div dangerouslySetInnerHTML={{ __html: blogPostData?.content }} />

                <div className='flex justify-between text-[20px] font-[500] mb-12'>
                    <p>Author: {blogPostData?.author}</p>
                    <p>Published On: {formatDate(blogPostData?.published_on)}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    <Posts data={filteredData} />
                </div>
            </div>


        </GuestLayout>
    )
}

export default BlogPost

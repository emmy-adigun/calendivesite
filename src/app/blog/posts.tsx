import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from './date-format';

interface Blog {
    id: number;
    cover_photo: string;
    description: string;
    content: string;
    published_on: string;
    slug: string;
    title: string;
    author: string;
}

interface PostProp {
    data: Blog[];
}

const Posts: React.FC<PostProp> = ({ data }) => {

    return (

        data.map((eachPost) => (
            <div
                key={eachPost.id}
                className="w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
            >
                <Image
                    src={eachPost.cover_photo}
                    alt="blogPostImg"
                    width={300}
                    height={250}
                    className="w-full h-[250px] object-cover"
                />
                <div className="relative pb-6">
                    <div className="absolute inset-0 mt-[-8px] bg-customBlue transform -rotate-90 scale-0 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 z-0"></div>

                    <div className="relative z-6 px-4 transition-all duration-300">
                        <h2 className="text-lg font-semibold mt-2 h-[60px] overflow-hidden text-ellipsis line-clamp-2">
                            {eachPost?.description}
                        </h2>

                        <p className="text-sm mt-2">
                            <span className='font-bold'>Published On:</span> {formatDate(eachPost.published_on)}
                        </p>

                        <p className="text-sm text-gray-500 mt-4 h-[80px] text-ellipsis line-clamp-4">
                            {eachPost?.content?.replace(/<[^>]*>?/gm, '')}
                        </p>



                        <Link href={`/blog/${eachPost.slug}`}>
                            <button
                                className="with-border w-32 h-10 bg-[#0A70E0] text-white border border-transparent rounded-lg hover:border-[#0A70E0] hover:bg-white hover:text-[#0A70E0] transition-all duration-300 mt-4"
                            >
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        ))

    )
}

export default Posts

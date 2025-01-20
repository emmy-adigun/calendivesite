import GuestLayout from '@/components/layouts/GuestLayout'
import consultantImg from "../../../public/images/consultant.jpg";
import scheduleImg from "../../../public/images/scheduling.jpg";
import interviewImg from "../../../public/images/interview.jpg";
import Image from 'next/image';

const featuredPost = [
    {
        image: consultantImg,
        header:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        note: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",

        id: 1,
    },
    {
        image: interviewImg,
        header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        note: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",

        id: 2,
    },
    {
        image: consultantImg,
        header:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        note: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",

        id: 3,
    },
    {
        image: interviewImg,
        header:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        note: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",

        id: 4,
    },
    {
        image: consultantImg,
        header:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        note: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",

        id: 5,
    },
];

function Blog() {
    return (
        <GuestLayout>
            <div className=" flex flex-col items-center mb-16">
                <div className="h-[300px] w-[100%] relative flex flex-col items-center justify-center">
                    <Image
                        src={scheduleImg}
                        alt="headerImg"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-[black] bg-opacity-80"></div>
                    <h1 className='absolute  text-white text-[35px]'>Blog Posts</h1>
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
                            {featuredPost.map((eachPost) => (
                                <div
                                    key={eachPost.id}
                                    className="w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
                                >
                                    <Image
                                        src={eachPost.image}
                                        alt="blogPostImg"
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="relative pb-6">
                                        <div className="absolute inset-0 mt-[-8px] bg-customBlue transform -rotate-90 scale-0 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 z-0"></div>

                                        <div className="relative z-10 px-4  transition-all duration-300">
                                            <h2 className="text-lg font-semibold mt-2 h-[60px] overflow-hidden text-ellipsis line-clamp-2 ">
                                                {eachPost.header}
                                            </h2>

                                            <p className="text-sm text-gray-500 mt-2 ">
                                                {eachPost.note}
                                            </p>

                                            <button
                                                className="with-border w-32 h-10 bg-[#0A70E0] text-white border border-transparent rounded-lg hover:border-[#0A70E0] hover:bg-white hover:text-[#0A70E0] transition-all duration-300 mt-4">
                                                Read More
                                            </button>

                                        </div>
                                    </div>
                                </div>



                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

export default Blog;


"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import useScroll from '@/components/layouts/NavbarScrollEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faBars, faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation';
import icon from "../../../public/images/icon.png";
import calendive_logo from "../../../public/images/calendive_logo.svg";



export default function Navigation(){
    const [navbar, setNavbar] = useState(false);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    useScroll((scrollPosition) => {
        if (scrollPosition > 50) {setNavbarBg('bg-white');} else {setNavbarBg('bg-transparent');}
    });
    const pathname = usePathname()
    const isLinkActive = (href:string) => {
        return pathname === href;
    };

    console.log(navbar);

    return (
        <header>
            <nav className={`w-full min-h-[80px] fixed top-0 z-10 bg-white border-b-[0.5px] ${navbarBg}`}>
                <div className={`w-full md:flex md:px-10 ${navbar?'':'px-5'}`}>
                    <div className="md:w-[15%]">
                        <div className="flex">
                            <div className="grow">
                                <Link href="/" className={`md:mt-2 ${navbar?'hidden':'block'}`}>
                                    <Image src={calendive_logo} alt="logo" priority={true}/>
                                </Link>
                            </div>
                            <div className="md:hidden flex-none">
                                {!navbar && (
                                    <button className="" onClick={() => setNavbar(!navbar)}>
                                        <FontAwesomeIcon icon={faBars} className="text-md"/>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={`md:w-[85%] ${navbar?'grid grid-cols-12 float-right':''}`}>
                        <ul className={`${navbar?'bg-white h-screen col-span-12 p-7':'w-[100%]'}`}>
                            <div className={`flex gap-20 ${navbar?'block':'hidden'}`}>
                                <div className="grow">
                                    <Link href="/" className="">
                                        <Image src={"/images/calendive_logo.svg"} width={179} height={32}  alt="calendive logo" priority={true}/>
                                    </Link>
                                </div>
                                <div  className="flex-none">
                                    <button  className="" onClick={() => setNavbar(!navbar)}>
                                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                            <div className={`md:flex text-[14px] mt-10 md:mt-0 leading-[20px] ${navbar?'block':'hidden'}`}>
                                <div className="grow">
                                    <div className="md:grid md:justify-items-center">
                                        <div className="md:flex gap-[52px]">
                                            <li className={`py-[13px] ${isLinkActive('/')?'text-[#101010]':'text-[#7B7B7B]'}`}>
                                                <Link href="/" className="text-[14px] ">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className={`py-[13px] ${isLinkActive('/')?'text-[#7B7B7B]':'text-[#7B7B7B]'}`}>
                                                <Link href="#" className="text-[14px]">Features</Link>
                                            </li>
                                            <li className={`py-[13px] ${isLinkActive('/blog')? 'text-[#101010]' : 'text-[#7B7B7B]'}`}>
                                                <Link href="/blog" className="text-[14px]">Blog</Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none">
                                    <div className="md:flex gap-[32px] md:pl-0">
                                        <li className="py-[13px]">
                                           <Link href="/" className={`text-[16px] text-[#7B7B7B] ${isLinkActive('/')?'text-[#7B7B7B]':'text-[#7B7B7B]'}`}>Login</Link>
                                        </li>
                                        <li className="flex gap-[6px] bg-[#0A70E0] text-white px-[16px] py-[13px] rounded-[4px]">
                                            <Image src={icon} alt="icon" className="h-[16px]"/>
                                            <Link href="/" className="text-[14px]">Book Consultation</Link>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul> 
                    </div>
                </div>
            </nav>
        </header>
            
    );
};

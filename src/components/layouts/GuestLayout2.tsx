'use client'
import { LayoutProps } from '@/hooks/types';
import { useEffect, useState } from 'react';
import Loading from '@/app/loader';
import ImageIcon from '@/components/ImageIcon';
import Link from 'next/link';
import NavBar from './NavBar';




export default function GuestLayout2({ children}:LayoutProps){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);


    return (
        <>
            {isLoading?
                (
                    <Loading />
                ):(
                    <section className="overflow-hidden">
                        <div className="w-full">
                            {children}
                        </div>
                    </section>
                )
            }
        </>
    );
};

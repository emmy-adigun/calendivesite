'use client'
import { LayoutProps } from '@/hooks/types';
import { useEffect, useState } from 'react';
import Loading from '@/app/loader';
import Footer from './Footer';
import Navigation from './Navigation';




export default function GuestLayout({ children}:LayoutProps){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);


    return (
        <div>
            {isLoading?
                (
                    <Loading />
                ):(
                    <section className="overflow-hidden">
                        <div className="w-full">
                            <Navigation />
                            <main  className="pt-[80px] w-full">
                                {children}
                            </main>
                             <Footer/>
                        </div>
                    </section>
                )
            }
        </div>
    );
};

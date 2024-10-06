import { useEffect } from 'react';

export default function useScroll(callback: { (scrollPosition: number): void}) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            callback(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);
}
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import aima1 from "../../../public/images/aima1.jpeg";
import aima2 from "../../../public/images/aima2.jpeg";
import aima3 from "../../../public/images/aima3.jpeg";

const MyCarousel = () => {
    const slides = [
        { image: aima1 },
        { image: aima2 },
        { image: aima3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full h-screen flex-shrink-0" 
                    >
                        <Image
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCarousel;

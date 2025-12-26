'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselImage {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
}

interface CarouselProps {
    images: CarouselImage[];
}

// W vibecoded carousel
const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, images.length]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full max-w-2xl mx-auto mt-8">
            <div className="relative h-[500px] w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative flex flex-col items-center justify-center h-full w-full p-4"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image 
                                src={images[currentIndex].src} 
                                alt={images[currentIndex].alt} 
                                width={images[currentIndex].width}
                                height={images[currentIndex].height}
                                className="object-contain max-h-[400px] rounded-lg shadow-md"
                                priority
                            />
                        </div>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                        >
                            {images[currentIndex].caption}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>

                <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white transition-all z-10 shadow-lg backdrop-blur-sm"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white transition-all z-10 shadow-lg backdrop-blur-sm"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                            idx === currentIndex 
                                ? 'bg-blue-500 w-4' 
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;

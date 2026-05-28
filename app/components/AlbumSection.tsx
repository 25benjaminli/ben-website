'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const images = [
	{
		src: "/photo_album/rainier.png",
		alt: "Rainier",
		caption: "Hiking near Mount Rainier."
	},
	{
		src: "/photo_album/rainier_night.jpg",
		alt: "Rainier (night)",
		caption: "Another Rainier pic, this time at night!"
	},
	{
		src: "/photo_album/cascades.jpg",
		alt: "North Cascades",
		caption: "North Cascades National Park, some more breathtaking views."
	},
	{
		src: "/photo_album/death_valley.jpg",
		alt: "Death Valley",
		caption: "Cooked alive at Death Valley!"
	},
	{
		src: "/photo_album/orange_reservoir.jpg",
		alt: "Orange Reservoir",
		caption: "Orange reservoir, love to go here when I'm in NJ."
	},
	{
		src: "/photo_album/cornell_sunset.jpg",
		alt: "Cornell Sunset",
		caption: "Cornell sunset, amazing :O"
	},
    {
		src: "/photo_album/cave.jpg",
		alt: "Huanglong Cave, Hunan",
		caption: "Huanglong cave. Beautiful karst cave formations!"
	},
	{
		src: "/photo_album/bouldering.png",
		alt: "Bouldering",
		caption: "Bouldering at local climbing gym!"
	},
	{
		src: "/photo_album/amnh.jpg",
		alt: "AMNH Mammoth",
		caption: "Mammoth at the American Museum of Natural History, NYC."
	},
	{
		src: "/photo_album/chainsmokers.png",
		alt: "The Chainsmokers at Slope Day 2026",
		caption: "The Chainsmokers at Slope Day 2026, Cornell!"
	},
	{
		src: "/photo_album/foggy.jpg",
		alt: "Foggy day at Cornell",
		caption: "A really foggy day at Cornell..."
	},
	{
		src: "/photo_album/summer_palace.jpg",
		alt: "Summer Palace, Beijing",
		caption: "The bridge at the Summer Palace in Beijing, China."
	},
];

const AlbumSection = () => {
	const [selected, setSelected] = useState<number | null>(null);

	const close = useCallback(() => setSelected(null), []);

	const prev = useCallback(() => {
		setSelected(i => i === null ? null : (i - 1 + images.length) % images.length);
	}, []);

	const next = useCallback(() => {
		setSelected(i => i === null ? null : (i + 1) % images.length);
	}, []);

	useEffect(() => {
		if (selected === null) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [selected, close, prev, next]);

	// Prevent body scroll when lightbox is open
	useEffect(() => {
		document.body.style.overflow = selected !== null ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [selected]);

	return (
		<div className="defaultContainer">
			<p className="text-sm text-gray-500 dark:text-gray-500 mb-5">Click any photo to view. In no particular order :)</p>

			{/* Masonry grid via CSS columns */}
			<div style={{ columns: '2', columnGap: '12px' }} className="sm:columns-2 lg:columns-3">
				{images.map((image, index) => (
					<div
						key={index}
						onClick={() => setSelected(index)}
						className="break-inside-avoid mb-3 overflow-hidden rounded-lg cursor-pointer group relative"
					>
						<div className="relative w-full overflow-hidden">
							<Image
								src={image.src}
								alt={image.alt}
								width={600}
								height={400}
								className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
							/>
						</div>
					</div>
				))}
			</div>

			{/* Lightbox */}
			{selected !== null && createPortal(
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
					onClick={close}
				>
					{/* Close button */}
					<button
						onClick={close}
						className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors text-2xl leading-none z-10 p-2"
						aria-label="Close"
					>
						✕
					</button>

					{/* Prev */}
					<button
						onClick={e => { e.stopPropagation(); prev(); }}
						className="absolute left-3 sm:left-6 text-white/50 hover:text-white transition-colors text-3xl leading-none z-10 p-2 select-none"
						aria-label="Previous"
					>
						‹
					</button>

					{/* Image + caption */}
					<div
						className="flex flex-col items-center max-w-[90vw] max-h-[90vh] px-12"
						onClick={e => e.stopPropagation()}
					>
						<div className="relative max-h-[78vh] flex items-center justify-center">
							<Image
								src={images[selected].src}
								alt={images[selected].alt}
								width={1200}
								height={900}
								className="max-h-[78vh] max-w-[82vw] w-auto h-auto object-contain rounded-md"
								sizes="90vw"
								priority
							/>
						</div>
						<p className="mt-4 text-gray-300 text-sm text-center max-w-md">
							{images[selected].caption}
						</p>
						<p className="mt-1 text-gray-600 text-xs">
							{selected + 1} / {images.length}
						</p>
					</div>

					{/* Next */}
					<button
						onClick={e => { e.stopPropagation(); next(); }}
						className="absolute right-3 sm:right-6 text-white/50 hover:text-white transition-colors text-3xl leading-none z-10 p-2 select-none"
						aria-label="Next"
					>
						›
					</button>
				</div>,
				document.body
			)}
		</div>
	);
};

export default AlbumSection;

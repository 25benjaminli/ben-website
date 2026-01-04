import Image from 'next/image';

const images = [
	{ 
		src: "/photo_album/rainier.png", 
		alt: "Rainier", 
		caption: "Hiking near Mount Rainier."
	},
	{
		src: "/photo_album/rainier_night.png", 
		alt: "Rainier (night)", 
		caption: "Another Rainier pic, this time at night!"
	},
	{ 
		src: "/photo_album/cascades.png", 
		alt: "North Cascades", 
		caption: "North Cascades National Park, some more breathtaking views."
	},
	{ 
		src: "/photo_album/death_valley.png", 
		alt: "Death Valley", 
		caption: "Cooked alive at Death Valley!"
	},
	{ 
		src: "/photo_album/orange_reservoir.png", 
		alt: "Orange Reservoir", 
		caption: "Orange reservoir, love to go here when I'm in NJ."
	},
	{ 
		src: "/photo_album/cornell_sunset.png", 
		alt: "Cornell Sunset", 
		caption: "Cornell sunset, amazing :O"
	},
    { 
		src: "/photo_album/cave.png", 
		alt: "Huanglong Cave, Hunan", 
		caption: "Huanglong cave. Beautiful karst cave formations!"
	},
	{ 
		src: "/photo_album/bouldering.png", 
		alt: "Bouldering", 
		caption: "Bouldering at local climbing gym!"
	},
];

const AlbumSection = () => {
    return (
        <div className="defaultContainer">
            <p>Hover/click to reveal caption. Work-in-progress, will be updated!</p>
            <br/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="relative group aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <p className="text-white text-center font-medium">
                                {image.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumSection;
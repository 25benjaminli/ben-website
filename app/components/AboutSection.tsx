import Carousel from './Carousel';

const images = [
	{ 
		src: "/photo_album/rainier.png", 
		alt: "Rainier", 
		caption: "Hiking near Mount Rainier, WA.",
		width: 500,
		height: 500
	},
	{ 
		src: "/photo_album/rainier_night.png", 
		alt: "Rainier (night)", 
		caption: "Loved Rainier so much had to include another night flick here.",
		width: 500,
		height: 500
	},
	{ 
		src: "/photo_album/cascades.png", 
		alt: "North Cascades", 
		caption: "North Cascades National Park, some more breathtaking views.",
		width: 500,
		height: 500
	},
	{ 
		src: "/photo_album/death_valley.png", 
		alt: "Death Valley", 
		caption: "Enjoyed getting cooked alive at Death Valley!",
		width: 500,
		height: 500
	},
	{ 
		src: "/photo_album/orange_reservoir.png", 
		alt: "Orange Reservoir", 
		caption: "Orange reservoir, love to go here often when I'm in NJ.",
		width: 500,
		height: 500
	},
	{ 
		src: "/photo_album/cornell_sunset.png", 
		alt: "Cornell Sunset", 
		caption: "Cornell sunset, amazing :O",
		width: 500,
		height: 500
	},
	{ 
		src: "/photo_album/rock.png", 
		alt: "Rock", 
		caption: "A special rock. If you know, you know ;)",
		width: 500,
		height: 500
	},
	{ 
		src: "/photo_album/bouldering.png", 
		alt: "Bouldering", 
		caption: "Bouldering at local climbing gym!",
		width: 500,
		height: 500
	},
];

const AboutSection = () => {
	return (
		<div className="defaultContainer">
			<div className="space-y-6">
				<p>
					Hello 👋! My name is Benjamin and I'm a first-year student at Cornell University, originally from Millburn, New Jersey. 
					I am a big AI and computer vision enthusiast especially for areas like healthcare and the environment.
					
				</p>
				<p>
					I write about tech sometimes, if you're interested feel free to check out my <a href = "https://medium.com/@25benjaminli" target="_blank" rel="noopener noreferrer">Medium</a> page.
					
					I also enjoy hiking, rock climbing, and learning about geography — my favorite geological feature is <a href = "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park" target = "_blank" rel="noopener noreferrer">Zhangjiajie National Forest Park</a>. Here are some photos from places I've been!
				</p>

				<Carousel images={images} />
			</div>
		</div>
	);
};

export default AboutSection;

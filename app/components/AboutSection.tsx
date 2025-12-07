import Image from 'next/image';

const AboutSection = () => {
	return (
		<div className="defaultContainer">
			<div className="space-y-6">
				<p>
					Hello! My name is Benjamin and I'm a first-year student at Cornell University, originally from Millburn, New Jersey. 
					I'm interested in solving socially important problems (e.g. in healthcare and the environment) with computing, particularly with AI and computer vision.
					
				</p>
				<p>
					I write about tech sometimes, if you're interested feel free to check out my <a href = "https://medium.com/@25benjaminli" target="_blank" rel="noopener noreferrer">Medium</a> page.
					
					I also enjoy hiking, rock climbing, and learning about geography — my favorite geological feature is <a href = "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park" target = "_blank" rel="noopener noreferrer">Zhangjiajie National Forest Park</a>. Here are some photos from places I've been!
				</p>

				<div className="flex flex-wrap items-center justify-center gap-4 pt-4">
					<figure className="relative group cursor-pointer">
						<Image src="/glacier.png" alt="Glaciers" width={300} height={300} className="object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" />
						<figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-3 rounded-b-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
							<span>Traversing glaciers in Alaska (I'm on the right!)</span>
						</figcaption>
					</figure>

					<figure className="relative group cursor-pointer">
						<Image src="/rainier.png" alt="Rainier" width={400} height={400} className="object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" />
						<figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-3 rounded-b-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
							<span>Hiking near Mount Rainier, WA!</span>
						</figcaption>
					</figure>

					<figure className="relative group cursor-pointer">
						<Image src="/loon_mountain.png" alt="Loon Mountain" width={400} height={400} className="object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" />
						<figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-3 rounded-b-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
							<span>Photo directly after a trail race up Loon Mountain, NH!</span>
						</figcaption>
					</figure>

					<figure className="relative group cursor-pointer">
						<Image src="/bouldering.png" alt="Bouldering" width={300} height={300} className="object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" />
						<figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-3 rounded-b-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
							<span>Bouldering at local climbing gym!</span>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;

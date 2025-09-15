import Image from 'next/image';

const HobbiesSection = () => {
	return (
		<div className="pt-2 pb-4 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-2">
                <p>
                    I'm a runner, having done cross country and track and field (sprinting & jumping) in high school. In the summer of 2024, I completed a grueling 10K race up Loon Mountain, New Hampshire - deemed "Most Competitive Hillclimb" by Runner's World Magazine!
                </p>

                <p>
                    I also love spending time outdoors and in nature, such as hiking or camping. 
                    But when I'm not able to travel far from home, I enjoy exploring new places and learning 
                    about different cultures through the game GeoGuessr. I had so much fun with the game that I reached 
                    top 80 on the competitive, no-move gamemode leaderboard in USA! 
                </p>

                <p>
                    Here are some of my favorite photos from places I've been, in real life of course:
                </p>

				<div className="flex flex-wrap items-center justify-center gap-4 pt-4">

                    <figure className="text-center">
						<Image src="/glacier.png" alt="Photo 4" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Traversing glaciers in Alaska (I'm on the right!)</figcaption>
					</figure>

                    <figure className="text-center">
						<Image src="/rainier.png" alt="Photo 2" width={400} height={400} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-[400px]">Reaching 8000 ft elevation near Mount Rainier, WA!</figcaption>
					</figure>

                    <figure className="text-center">
						<Image src="/loon_mountain.png" alt="Photo 2" width={400} height={400} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-[400px]">Photo directly after the race up Loon Mountain, NH. Behind my smile lies a world of hurt!</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default HobbiesSection;

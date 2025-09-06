import Image from 'next/image';

const HobbiesSection = () => {
	return (
		<div className="pt-2 pb-4 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4">

				<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {/* on the academic side... */}
                    I especially enjoy informative writing; it's gratifying to help people curious to learn more about a subject while solidifying my own understanding. 
                    I write on <a href = "https://medium.com/@25benjaminli" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Medium.com</a> about topics like medical image segmentation, object detection tutorials, idea generation, and AI ethics. 
                    I also developed a judging app for the 2025 <a href = "https://www.njas.org/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">New Jersey Academy of Science (NJAS)</a> Symposium to streamline the review process for hundreds of student research projects.
                    {/* Attending weekly developer sessions with the Medical Open Network for AI (2024). */}
                </p>
                {/* Reached #80 in the USA in May 2025 in competitive no-move gamemode of GeoGuessr (players guess locations based on randomly selected Google Street View images). 65 million registered players worldwide</li> */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    I also enjoy running! I did cross country and track and field (sprinting & jumping) in high school. In the summer of 2024, I completed a grueling race up Loon Mountain, New Hampshire - deemed "Most Competitive Hillclimb" by Runner's World Magazine. 
                </p>

                {/* text to say these are some of my favorite photos from random areas */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Finally, I love spending time in nature. Here are some of my favorite photos from places I've been:
                </p>

				{/* add photos of myself here: specifically, I have photo1.jpg, photo2.jpg, photo3.jpg that I want to display below all this */}
				<div className="flex flex-wrap items-center justify-center gap-4 pt-4">
					<figure className="text-center">
						<Image src="/libertystatepark.jpg" alt="Photo 1" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Liberty State Park Cleanup, New Jersey</figcaption>
					</figure>
					
					<figure className="text-center">
						<Image src="/rainier.png" alt="Photo 2" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Hiking with my dad near Mount Rainier, Washington</figcaption>
					</figure>
					
					<figure className="text-center">
						<Image src="/cascades.png" alt="Photo 4" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Exploring North Cascades National Park</figcaption>
					</figure>

                    <figure className="text-center">
						<Image src="/glacier.png" alt="Photo 4" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Traversing glaciers in Alaska</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default HobbiesSection;

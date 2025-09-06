import Image from 'next/image';

const HobbiesSection = () => {
	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 ">
				{/* <div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Community Involvement & Hobbies</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div> */}

				<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {/* on the academic side... */}
                    I especially enjoy informative writing, as it's gratifying to be able to help people who are curious learning more about subjects while solidifying my own understanding. 
                    I author technical articles on Medium.com (link in the profile section) on topics including medical image segmentation, object detection tutorials, idea generation, and AI ethics. 
                    {/* Attending weekly developer sessions with the Medical Open Network for AI (2024). Developing judging application for NJAS (2025). Liberty State Park cleanup (2025).  */}
                    <br/>
                    <br/>

                    {/* I also like exploring nature and pushing the limits of my body and mind! Some highlights include:
                    <ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
                        <li>I ran cross country and track and field (sprinting & jumping) in high school</li>
                        <li>Completed the Loon Mountain Race - USA Track & Field (USATF) Vertical National Championship - "Most Competitive Hillclimb" by Runner's World Magazine</li>
                        <li>In the summer of 2025, hiked to 8k+ ft elevation at Mt. Rainier in Washington, USA</li>
                        <li>Ranked #80 in the USA in May 2025 in the competitive no-move gamemode of GeoGuessr (players guess locations based on randomly selected Google Street View images, 65 million registered players worldwide)</li>
                    </ul> */}
                    
                </p>

                {/* text to say these are some of my favorite photos from random areas */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Here are some of my favorite photos from various places I've explored:
                </p>

				{/* add photos of myself here: specifically, I have photo1.jpg, photo2.jpg, photo3.jpg that I want to display below all this */}
				<div className="flex flex-wrap items-center justify-center gap-4 pt-4">
					<figure className="text-center">
						<Image src="/IMG_5460.jpg" alt="Photo 1" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Liberty State Park Cleanup, New Jersey</figcaption>
					</figure>
					
					<figure className="text-center">
						<Image src="/IMG_7859.jpg" alt="Photo 2" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Hiking near Mount Rainier, Washington</figcaption>
					</figure>
					
					<figure className="text-center">
						<Image src="/IMG_8250.jpg" alt="Photo 3" width={300} height={300} className="object-cover rounded-lg shadow-md" />
						<figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">Climbing Mount Washington, New Jersey</figcaption>
					</figure>
					
					<figure className="text-center">
						<Image src="/IMG_8358.jpg" alt="Photo 4" width={300} height={300} className="object-cover rounded-lg shadow-md" />
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

const HobbiesSection = () => {
	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 ">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Community Involvement & Hobbies</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {/* on the academic side... */}
                    I especially enjoy informative writing, as it's gratifying to be able to help people who are curious learning more about subjects while solidifying my own understanding. 
                    I author technical articles on Medium.com (link in the profile section) on topics including medical image segmentation, object detection tutorials, idea generation, and AI ethics. 
                    {/* Attending weekly developer sessions with the Medical Open Network for AI (2024). Developing judging application for NJAS (2025). Liberty State Park cleanup (2025).  */}
                    <br/>
                    <br/>

                    I also like exploring nature and pushing the limits of my body and mind! Some highlights include:
                    <ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
                        <li>I ran cross country and track and field (sprinting & jumping) in high school</li>
                        <li>Completed the Loon Mountain Race - USA Track & Field (USATF) Vertical National Championship - "Most Competitive Hillclimb" by Runner's World Magazine</li>
                        <li>In the summer of 2025, hiked to 8k+ ft elevation at Mt. Rainier in Washington, USA</li>
                        <li>Ranked #80 in the USA in May 2025 in the competitive no-move gamemode of GeoGuessr (players guess locations based on randomly selected Google Street View images, 65 million registered players worldwide)</li>
                    </ul>
                    
                </p>
			</div>
		</div>
	);
};

export default HobbiesSection;

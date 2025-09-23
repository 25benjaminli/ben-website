const HonorsSection = () => {
	const honors = [
		{
			title: 'Regeneron Science Talent Search Top 40 Finalist',
			organization: 'Society for Science, Regeneron Pharmaceuticals',
			year: '2025',
			highlights: (
				<ul>
					<li>The "oldest and most prestigious" science competition in the United States, with nearly 2,500 applicants who are evaluated based on "the originality and creativity of their scientific research, as well as their achievement and leadership"</li>
					<li>Awarded $25,000 for research on building <a href = "https://doi.org/10.1117/1.JMI.12.2.024007" target = "_blank">an algorithm</a> to better detect brain tumors with low-quality MRI scans from sub-Saharan Africa</li>
				</ul>
			)
		},
        {
			title: '1st Place - Math & Computer Science',
			organization: 'New Jersey Academy of Sciences (NJAS) Symposium',
			year: '2024',
			highlights: (
				<ul>
					<li>Selected to represent New Jersey for national symposium after winning 1st place in Math and Computer Science at the annual NJAS Symposium</li>
				</ul>
			)
		},

        {
			title: 'Best Paper & Best Presenter Awards (Artificial Intelligence/Machine Learning)',
			organization: 'IEEE Ubiquitous Computing, Electronics & Mobile Communication Conference @ Columbia University',
			year: '2023',
			highlights: (
				<ul>
					<li>Research: <a href = "https://ieeexplore.ieee.org/document/10316078" target = "_blank">“Identification of Cyanobacteria for Harmful Algal Blooms Research Using the YOLO Framework”</a></li>
				</ul>
			)
		},
		{
            title: 'New York Times STEM Writing Contest (Honorable Mention)',
            organization: 'New York Times',
            year: '2023',
            highlights: (
                <ul>
                    <li>Top 1% out of over 3000 global entries for my article on black box algorithms and explainable AI (xAI)</li>
                </ul>
            )
        },

		{
            title: 'Naval Horizons STEM Essay Contest (Highest Honors)',
            organization: 'U.S. Navy',
            year: '2022',
            highlights: (
                <ul>
                    <li>Won the highest award for my critical essay on the ethics and future of artificial intelligence in the military</li>
                </ul>
            )
        },

        {
            title: 'Presidential Volunteer Service Award (Gold)',
            organization: 'U.S. Government',
            year: '2022',
            highlights: (
                <ul>
                    <li>Recognized for volunteering commitment to teaching and constructing python curriculum at Equal Access Robotics, developing volunteer outreach app for Jersey Cares</li>
                </ul>
            )
        }
	];

	return (
		<div className="defaultContainer">
			<div className="space-y-6">
				{/* Honors Section */}
				<div>
					<div className="space-y-4">
						{honors.map((honor, index) => (
							<div key={index} className="relative">
								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-lg font-medium text-gray-900 dark:text-white">{honor.title}</h4>
										<span className="text-base text-gray-500 dark:text-gray-400">{honor.year}</span>
									</div>
									<p className="text-base font-medium text-gray-600 dark:text-gray-300">{honor.organization}</p>
									<div className="mt-2">{honor.highlights}</div>
								</div>
							</div>
						))}

						<p>Please see my resume for more comprehensive list of awards and activities.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HonorsSection;
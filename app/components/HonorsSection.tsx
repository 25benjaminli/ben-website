const HonorsSection = () => {
	const honors = [
		{
			title: 'Regeneron Science Talent Search Top 40 Finalist',
			organization: 'Society for Science, Regeneron Pharmaceuticals',
			year: '2025',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>The “nation's oldest and most prestigious” science competition in the United States, with nearly 2,500 applicants who are evaluated based on “the originality and creativity of their scientific research, as well as their achievement and leadership”</li>
					<li>Awarded $25,000 for research: “MD-SA2: Multimodal, Depth-Aware Brain Tumor Segmentation in Sub-Saharan Populations”</li>
				</ul>
			)
		},
        {
			title: '1st Place - Math & Computer Science',
			organization: 'New Jersey Academy of Sciences (NJAS) Symposium',
			year: '2024',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>Selected to represent New Jersey after winning 1st place in Math and Computer Science at the annual NJAS Symposium</li>
				</ul>
			)
		},

        {
			title: 'Best Paper & Best Presenter Award (Artificial Intelligence/Machine Learning)',
			organization: 'IEEE Ubiquitous Computing, Electronics & Mobile Communication Conference @ Columbia University',
			year: '2023',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>Research: “Identification of Cyanobacteria for Harmful Algal Blooms Research Using the YOLO Framework”</li>
				</ul>
			)
		},

        {
            title: 'Presidential Volunteer Service Award (Gold)',
            organization: 'Government of the United States',
            year: '2022',
            highlights: (
                <ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
                    <li>Recognized for volunteering commitment to teaching and constructing python curriculum at Equal Access Robotics, developing volunteer outreach app for Jersey Cares</li>
                </ul>
            )
        }
		
	];

	return (
		<div className="pt-2 pb-4 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 ">
				<div className="space-y-4">
					{honors.map((honor, index) => (
						<div key={index} className="relative">
							<div className="space-y-1">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between">
									<h4 className="text-md font-medium text-gray-900 dark:text-white">{honor.title}</h4>
									<span className="text-sm text-gray-500 dark:text-gray-400">{honor.year}</span>
								</div>
								<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{honor.organization}</p>
								<div className="mt-2">{honor.highlights}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HonorsSection;
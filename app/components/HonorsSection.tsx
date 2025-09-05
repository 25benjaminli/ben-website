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
		
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 ">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Selected Honors & Awards</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

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
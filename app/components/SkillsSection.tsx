const SkillsSection = () => {
	const skills = [
		{
			category: 'Languages',
			items: ['Python', 'Java', 'Javascript', 'TypeScript', 'SQL', 'C++', 'HTML/CSS'],
		},
		{
			category: 'Web/App Development Frameworks',
			items: ['React.js', 'Next.js', 'Flutter', 'Dart', 'Flask', 'Firebase'],
		},
		{
			category: 'ML/DL/Data Science',
			items: ['PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'OpenCV'],
		},
	];

	return (
		<div className="defaultContainer">
			<div className="space-y-4 ">

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category}>
							<div className="flex items-center space-x-2 mb-2">
								<h4 className="text-base font-medium text-gray-600 dark:text-gray-400">{skillGroup.category}</h4>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;

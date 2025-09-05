const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Intern (on-site), Regeneron Pharmaceuticals',
			org: 'Innovation Labs',
			period: 'Summer 2025',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>Developed open-source implementation of a quantum optimization algorithm to solve for the most probable molecular docking configuration between proteins and ligands</li>
					<li>Presented & discussed work with internal Regeneron teams and IBM research team members</li>
				</ul>
			)
		},
		{
			role: 'Computer Vision, Bioinformatics Student Researcher',
			org: 'Millburn High School',
			period: '2022 - 2025',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>Developed more efficient & accurate deep learning algorithms to predict human-infecting, viral zoonoses based on genomics sequences, delineate toxin-producing cyanobacteria, and segment brain tumors</li>
					<li>Special focus on few-shot learning and optimizing setups given limited computing resources/data quality</li>
				</ul>
			),
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 ">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.org} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.org}</p>
									<div className="mt-2">{exp.highlights}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;

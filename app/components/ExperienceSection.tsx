import Timeline from './Timeline';

const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Intern (on-site)',
			org: 'Regeneron Pharmaceuticals',
			period: 'Summer 2025',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>Developed open-source implementation of a quantum optimization algorithm for molecular docking</li>
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
					<li>Developed ML/DL algorithms to predict human-infecting, viral zoonoses based on genomics sequences, delineate toxin-producing cyanobacteria, and segment brain tumors given low-quality MRI data from sub-Saharan Africa</li>
					<li>Special focus on few-shot learning and optimizing setups given limited computing resources/data quality</li>
				</ul>
			),
		},
	];

	return <Timeline arr={experiences} title={"Experience"}/>;
};

export default ExperienceSection;
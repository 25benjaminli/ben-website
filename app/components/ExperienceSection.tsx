import Timeline from './Timeline';

const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Intern (on-site)',
			org: 'Regeneron Pharmaceuticals',
			period: 'Summer 2025',
			highlights: (
				<ul>
					<li>Developed open-source implementation of a quantum optimization algorithm for molecular docking</li>
					<li>Learned how to leverage various technologies (e.g. Qiskit, AWS)</li>
					<li>Presented & discussed work with internal Regeneron teams and IBM research team members</li>
				</ul>
			)
		},
		{
			role: 'Computer Vision, Bioinformatics Student Researcher',
			org: 'Millburn High School',
			period: '2022 - 2025',
			highlights: (
				<ul>
					<li>Developed machine learning algorithms for:</li>
					<ul className="ml-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-[circle] list-inside">
						<li>Predicting human-infecting, viral zoonoses based on genomics sequences</li>
						<li>Detecting toxin-producing cyanobacteria for harmful algal bloom research</li>
						<li><a href = "https://www.societyforscience.org/regeneron-sts/2025-student-finalists/benjamin-li/" target = "_blank">Segmenting brain tumors</a> using low-quality MRI data from sub-Saharan Africa</li>
					</ul>
					<li>Special focus on few-shot learning and optimizing setups given limited computing resources/data quality</li>
				</ul>
			),
		},
		{
			role: 'President of Computer Science Club',
			org: 'Millburn High School',
			period: '2022 - 2025',
			highlights: (
				<ul>
					<li>Developed & maintained kiosk security app serving 1600 students</li>
					<li>Built websites for school clubs, taught lessons on frontend/backend web dev and artificial intelligence</li>
					<li>Hosted guest speakers in AI & ethics, medical imaging, and robotics</li>
					<li>Founding editor-in-chief for <a href="https://drive.google.com/file/d/1s6lKJMDXhAdZULotxkBR-Btz46Bv0R-X/view">"Catalyst" CS & engineering magazine</a></li>
				</ul>
			),
		},
	];

	return <Timeline arr={experiences} title={"Experience"}/>;
};

export default ExperienceSection;
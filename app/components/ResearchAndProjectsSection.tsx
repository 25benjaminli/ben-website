const ResearchAndProjects = () => {
	const publications = [
		{
			citation: (
				<p><strong>Li, B.</strong>, Ding, K, Dera, D. (2025). MD-SA2: optimizing Segment Anything 2 for multimodal, depth-aware brain tumor segmentation in sub-Saharan populations. J. Med. Imag. 12(2). <a href="https://doi.org/10.1117/1.JMI.12.2.024007" target="_blank" rel="noopener noreferrer">https://doi.org/10.1117/1.JMI.12.2.024007</a></p>
			)
		},
		{
			citation: (
				<p><strong>Li, B.</strong>, Serrano, K., Mazzaro, M., Wu, M., Wang, W., & Zhu, M. (2023). Identification of Cyanobacteria for Harmful Algal Blooms Research Using the YOLO Framework. IEEE Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON). <a href="https://doi.org/10.1109/uemcon59035.2023.10316078" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/uemcon59035.2023.10316078</a></p>
			)
		},
		{
			citation: (
				<p><strong>Li, B.</strong> (2023). A Novel Stacked Ensemble Machine Learning Model for Predicting Viral Zoonoses. (Accepted for poster presentation) Association for Computing Machinery (ACM) 2023 Annual Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM-BCB).</p>
			)
		}
	];

	const projects = [
		{
			title: 'SAM2LoRA: Parameter-Efficient Fine-tuning for SAM2',
			link: 'https://github.com/25benjaminli/sam2lora',
			description: 'An early implementation of low-rank adaptation for the Segment Anything 2 Model. Developed while experimenting with the SA2 model for my MD-SA2 study.'
		},
		{
			title: 'Molecular Docking QAOA',
			link: 'https://github.com/25benjaminli/molecular_docking_qaoa',
			description: 'Quantum optimization algorithm for molecular docking using QAOA, developed during 2025 summer internship at Regeneron.'
		},
		{
			title: 'Personal Website',
			link: 'https://github.com/25benjaminli/ben-website',
			description: 'This website! Built with Next.js, TypeScript, and Tailwind.'
		},
		{
			title: '2025 New Jersey Academy of Sciences (NJAS) Symposium Judging App',
			link: 'https://www.njas.org/',
			description: 'Streamlined the review process for 80 judges and over 200 student research projects by adding Google Forms/Sheets API integration, judge ID and student verification, and sanity checks for valid form input.'
		},
		{
			title: 'Machining Request Processor',
			link: 'https://github.com/25benjaminli/request-database-mhs-machining',
			description: 'Web app with authentication and database logic to process machining requests for school robotics team.'
		}
	];

	return (
		<section className="mb-12">
			{/* Publications Section */}
			<h2 className="heading-secondary">
				Publications
			</h2>
			<div className="space-y-4 mb-16">
				{publications.map((publication, index) => (
					<div key={index}>
						{publication.citation}
					</div>
				))}
			</div>

			{/* Projects Section */}
			<h2 className="heading-secondary">
				Projects
			</h2>
			<div className="space-y-8 mb-16">
				{projects.map((project, index) => (
					<div key={index}>
						<h3 className="heading-tertiary mb-2">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
								{project.title}
							</a>
						</h3>
						<p className="text-body">{project.description}</p>
					</div>
				))}
			</div>

			{/* In-Progress Section */}
			<h2 className="heading-secondary">
				In-Progress
			</h2>
			<ul>
				<li>Expository paper and from-scratch implementations of common deep learning architectures (MLP, CNN, Transformer, etc) with nothing more than numpy</li>
			</ul>
		</section>
	);
};

export default ResearchAndProjects;
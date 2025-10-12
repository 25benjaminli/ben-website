import Image from 'next/image';
const ResearchAndProjects = () => {

	const projects = [
		{
			title: 'SAM2LoRA: Parameter-Efficient Fine-tuning for SAM2',
			link: 'https://github.com/25benjaminli/sam2lora',
			description: (
				<>
				<p>One of the earliest (to the best of my knowledge) attempts at low-rank adaptation for the Segment Anything 2 Model, targeted at the image encoder. Developed while experimenting with the SA2 model for my MD-SA2 study.</p>
				<br/>
				<div className="flex flex-col md:flex-row gap-6 items-center justify-center">
					<div className="flex flex-col items-center">
						<Image src="/lora.png" alt="SAM2LoRA Example" width={300} height={300} />
						<p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2 max-w-[300px]">LoRA schema. Diagram borrowed from <a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noopener noreferrer">original paper.</a></p>
					</div>
					
					<div className="flex flex-col items-center">
						<Image src="/sa2.png" alt="Segment Anything 2 Architecture" width={400} height={240} />
						<p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2 max-w-[400px]">Segment Anything 2 architecture. Diagram borrowed from <a href="https://medium.com/data-science/segment-anything-2-what-is-the-secret-sauce-a-deep-learners-guide-1c43dd07a6f8" target="_blank" rel="noopener noreferrer" >this article.</a></p>
					</div>
				</div>

				</>
				
			)
		},
		{
			title: 'Molecular Docking QAOA',
			link: 'https://github.com/25benjaminli/molecular_docking_qaoa',
			description: (
				<>
					<p>Finding the most likely molecular docking configuration between selected proteins and ligands using the Quantum Approximate Optimization Algorithm (QAOA), developed during my 2025 summer internship at Regeneron. Accurately and rapidly modeling these interactions is crucial for precise drug development.
					</p>
					<br/>
					<div className="flex justify-center">
						<Image src="/qaoa.png" alt="QAOA Molecular Docking" width={600} height={400} />
					</div>
					<p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">Example 8-qubit QAOA circuit for 3HAC (DPP-4 complexed with piperidine-fused imidazopyridine 34). </p>
				</>
			)
		},
		{
			title: 'ML/DL Expository Paper + Resources',
			link: 'https://github.com/25benjaminli/ml-explanations',
			description: (
				<>
				<p>This work-in-progress repository contains an expository paper on some ML/DL approaches in addition to illustrations/diagrams/code samples. </p>
				<br/>
				<div className="flex justify-center">
					<Image src="/dpo.png" alt="dpo" width={400} height={200} />
				</div>
				<p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">Preview of a diagram of direct preference optimization (DPO) from the paper.</p>
				</>
			)
		},
		{
			title: '2025 New Jersey Academy of Sciences (NJAS) Symposium Judging App',
			link: 'https://www.njas.org/',
			description: (
				<>
					<p>Streamlined the review process for 80 judges and over 200 student research projects by adding Google Forms/Sheets API integration, judge ID and student verification, scoring aggregation, and sanity checks for valid form input.</p>
					<br/>
					<div className="flex justify-center">
						<Image src="/njas.png" alt="NJAS logo" width={300} height={300} />
					</div>
				</>
				
			)
		},
		{
			title: 'Machining Request Processor',
			link: 'https://github.com/25benjaminli/request-database-mhs-machining',
			description: (
				<p>Web app with authentication, database logic, and automatic notification emailing system to process machining requests for school robotics team. Built with Flask + SQL. </p>
			)
		},
		{
			title: 'Personal Website',
			link: 'https://github.com/25benjaminli/ben-website',
			description: (
				<p>This website! Built with Next.js, TypeScript, and Tailwind.</p>
			)
		},
		
	];

	return (
		<section className="mb-12 px-4 sm:px-0">
			{/* Conferences/Journals */}
			<h2 className="heading-secondary break-words-anywhere">
				Conferences/Journals
			</h2>
			<div className="space-y-4 mb-16 overflow-hidden">
				<p className="break-words-anywhere"><strong>Li, B.</strong>, Ding, K, Dera, D. (2025). MD-SA2: optimizing Segment Anything 2 for multimodal, depth-aware brain tumor segmentation in sub-Saharan populations. J. Med. Imag. 12(2). <a href="https://doi.org/10.1117/1.JMI.12.2.024007" target="_blank" rel="noopener noreferrer" className="break-url">https://doi.org/10.1117/1.JMI.12.2.024007</a></p>

				<p className="break-words-anywhere"><strong>Li, B.</strong>, Serrano, K., Mazzaro, M., Wu, M., Wang, W., & Zhu, M. (2023). Identification of Cyanobacteria for Harmful Algal Blooms Research Using the YOLO Framework. IEEE Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON). <a href="https://doi.org/10.1109/uemcon59035.2023.10316078" target="_blank" rel="noopener noreferrer" className="break-url">https://doi.org/10.1109/uemcon59035.2023.10316078</a></p>

				<p className="break-words-anywhere"><strong>Li, B.</strong> (2023). A Novel Stacked Ensemble Machine Learning Model for Predicting Viral Zoonoses. (Poster accepted, not presented due to insufficient funds) Association for Computing Machinery (ACM) 2023 Annual Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM-BCB).</p>
			</div>

			{/* Projects */}
			<h2 className="heading-secondary">
				Projects
			</h2>
			<div className="space-y-8 mb-16 overflow-hidden">
				{projects.map((project, index) => (
					<div key={index} className="overflow-hidden">
						<h3 className="heading-tertiary mb-2 break-words-anywhere">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-url"
							>
								{project.title}
							</a>
						</h3>
						<div className="break-words-anywhere">
							{project.description}
						</div>
					</div>
				))}
			</div>

	
		</section>
	);
};

export default ResearchAndProjects;
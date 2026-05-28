'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

type Tag = 'ML/DL' | 'CV/Graphics' | 'Web Dev' | 'RL' | 'Quantum' | 'Systems';


interface Project {
	title: string;
	link: string;
	summary: string;
	tags: Tag[];
	description: React.ReactNode;
}

const projects: Project[] = [
	{
		title: 'Evidential Learning for Image Reconstruction',
		link: 'https://github.com/25benjaminli/edl-reconstruction',
		summary: 'Uncertainty quantification for grayscale-to-RGB reconstruction using evidential deep learning.',
		tags: ['ML/DL', 'CV/Graphics'],
		description: (
			<>
				<p>Work done for Computational Imaging Lab at Cornell. Implemented <a href="https://arxiv.org/abs/1910.02600" target="_blank" rel="noopener noreferrer">evidential deep learning (EDL)</a> in a new domain (image reconstruction) for single-shot aleatoric (inherent) and epistemic (reducible with more data) uncertainty quantification. Learned the parameters to the Normal Inverse Gamma, a meta-distribution for the Gaussian. Specifically, the task was to convert grayscale to RGB. Created <a href = "https://docs.google.com/presentation/d/1yjTbxTcDUt_r4XmddTrQcxiH6axVJcGThnD2bXtMePE" target="_blank" rel="noopener noreferrer">slideshow presentation</a> and wrote <a href = "https://towardsdatascience.com/introduction-to-deep-evidential-regression-for-uncertainty-quantification/" target="_blank" rel="noopener noreferrer">article</a> for Towards Data Science, a publication with millions of monthly readers, on the subject.</p>
				<br />
				<div className="flex justify-center">
					<Image src="/edl.png" alt="EDL Reconstruction" width={600} height={400} className="rounded-lg max-w-full" />
				</div>
				<p className="caption-text">Example output of the model. Different regions of the hair elicit varying levels of epistemic / aleatoric uncertainty.</p>
			</>
		),
	},
	{
		title: 'SAM2LoRA: Parameter-Efficient Fine-tuning for SAM2',
		link: 'https://github.com/25benjaminli/sam2lora',
		summary: 'One of the earliest LoRA adaptations for the Segment Anything 2 image encoder.',
		tags: ['ML/DL'],
		description: (
			<>
				<p>One of the earliest (to the best of my knowledge) attempts at low-rank adaptation for the Segment Anything 2 Model, targeted at the image encoder. Developed while experimenting with the SA2 model for my MD-SA2 study.</p>
				<br />
				<div className="flex flex-col md:flex-row gap-6 items-center justify-center">
					<div className="flex flex-col items-center">
						<Image src="/lora.png" alt="SAM2LoRA Example" width={300} height={300} className="rounded-lg" />
						<p className="caption-text max-w-[300px]">LoRA schema. Diagram borrowed from <a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noopener noreferrer">original paper.</a></p>
					</div>
					<div className="flex flex-col items-center">
						<Image src="/sa2.png" alt="Segment Anything 2 Architecture" width={400} height={240} className="rounded-lg" />
						<p className="caption-text max-w-[400px]">Segment Anything 2 architecture. Diagram borrowed from <a href="https://medium.com/data-science/segment-anything-2-what-is-the-secret-sauce-a-deep-learners-guide-1c43dd07a6f8" target="_blank" rel="noopener noreferrer">this article.</a></p>
					</div>
				</div>
			</>
		),
	},
	{
		title: 'Molecular Docking QAOA',
		link: 'https://github.com/25benjaminli/molecular_docking_qaoa',
		summary: 'QAOA-based molecular docking configuration search, developed at Regeneron.',
		tags: ['Quantum'],
		description: (
			<>
				<p>Developed during my 2025 summer internship at Regeneron, this project finds the most likely molecular docking configuration between selected proteins and ligands using the Quantum Approximate Optimization Algorithm (QAOA). Accurately and rapidly modeling these interactions is crucial for precise drug development.</p>
				<br />
				<div className="flex justify-center">
					<Image src="/qaoa.png" alt="QAOA Molecular Docking" width={600} height={400} className="rounded-lg max-w-full" />
				</div>
				<p className="caption-text">Example 8-qubit QAOA circuit for 3HAC (DPP-4 complexed with piperidine-fused imidazopyridine 34).</p>
			</>
		),
	},
	{
		title: 'ML/DL Expository Paper + Resources',
		link: 'https://github.com/25benjaminli/ml-explanations',
		summary: 'Work-in-progress expository paper with illustrations covering ML/DL approaches.',
		tags: ['ML/DL'],
		description: (
			<>
				<p>This work-in-progress repository contains an expository paper on some ML/DL approaches in addition to illustrations and diagrams. See relevant <a href="https://github.com/25benjaminli/ml-explanations-code" target="_blank" rel="noopener noreferrer">code samples here.</a></p>
				<br />
				<div className="flex justify-center">
					<Image src="/dpo.png" alt="dpo" width={400} height={200} className="rounded-lg max-w-full" />
				</div>
				<p className="caption-text">Preview of a diagram of direct preference optimization (DPO) from the paper.</p>
			</>
		),
	},
	{
		title: 'Autograd from Scratch',
		link: 'https://github.com/25benjaminli/cds-autograd-from-scratch',
		summary: 'Vectorized autograd engine replicating PyTorch backward pass functionality.',
		tags: ['ML/DL', 'Systems'],
		description: (
			<>
				<p>Led Cornell students to build an improved version of <a href = "https://github.com/karpathy/micrograd" target="_blank" rel="noopener noreferrer">micrograd</a> by Andrej Karpathy, developing a vectorized reverse-mode automatic differentiation engine. Support for more operations, new losses, SGD optimizer, validated on MNIST, and built an interactive visualizer for the computation graph. </p>
				<br />
				<div className="flex justify-center">
					<Image src="/backprop_viz.png" alt="Backpropagation visualization" width={600} height={400} className="rounded-lg max-w-full" />
				</div>
				<p className="caption-text">Example graph generated by backprop visualizer, where the weight matrix is being updated.</p>
			</>
		),
	},
	{
		title: 'LLM Steganography',
		link: 'https://github.com/25benjaminli/llm-steganography',
		summary: 'Engineering and detecting steganography arising from misspecified reward signals in LLMs.',
		tags: ['ML/DL', 'RL'],
		description: (
			<>
				<p>Led project focused on engineering a system for enabling and detecting steganography that emerges from misspecified reward signals in large language models. Focused on replicating the results of a <a href = "https://neurips.cc/virtual/2024/106305" target="_blank" rel="noopener noreferrer">research paper</a> and extensions such as replacing PPO with GRPO and explicitly fine-tuning the overseer model.</p>
				<br />
				<div className="flex justify-center">
					<Image src="/llm_steganography.png" alt="LLM Steganography experimental setup" width={600} height={400} className="rounded-lg max-w-full" />
				</div>
				<p className="caption-text">Experimental setup using three models — sender, receiver, and overseer — pitted against each other adversarially.</p>
			</>
		),
	},
	{
		title: 'Adaptive Cache',
		link: 'https://github.com/CornellDataScience/learning-based-cache-eviction',
		summary: 'ML-based cache eviction policy that learns from key usage patterns.',
		tags: ['ML/DL', 'Systems'],
		description: (
			<>
				<p>Built workloads and model/feature engineering for ML-based system that learns an eviction policy for cache management based on historical key usage patterns. The resulting model achieves up to 8% hit rate improvement on tasks relative to baseline policy (LRU).</p>
				<br />
				<div className="flex justify-center">
					<Image src="/eviction_logic.png" alt="Cache eviction procedure overview" width={600} height={400} className="rounded-lg max-w-full" />
				</div>
				<p className="caption-text">Overview of cache eviction procedure, where keys are pitted against each other pairwise and inputted into MLP for judging. The key with the most eviction votes wins, and the procedure can be run on or offline.</p>
			</>
		),
	},
		{
		title: 'OCaml Raytracer',
		link: 'https://github.com/arinb123/OCamera',
		summary: 'Multithreaded raytracer in OCaml with a GUI, supporting meshes, textures, and custom camera controls.',
		tags: ['CV/Graphics'],
		description: (
			<>
				<p>Collaborated to build a raytracer in OCaml supporting spheres, triangles, and user-defined polygon meshes, lambertian and metal surface textures, and a customizable camera. Wrote a linear algebra and geometry library from scratch. Features multithreading for performance and a graphical user interface where users can interactively move the camera and upload custom meshes.</p>
				<br />
				<div className="flex justify-center">
					<Image src="/camltrace.png" alt="OCaml Raytracer GUI" width={600} height={400} className="rounded-lg max-w-full" />
				</div>
				<p className="caption-text">Image of a scene with three spheres with lambertian and metal material contained within our GUI.</p>
			</>
		),
	},
	{
		title: 'NJAS Symposium Judging App',
		link: 'https://github.com/25benjaminli/science_fair_judging',
		summary: 'Streamlined review for ~80 judges and ~200 student projects with Google Sheets integration.',
		tags: ['Web Dev'],
		description: (
			<>
				<p>Streamlined the review process for ~80 judges and ~200 student research projects by adding Google Forms/Sheets API integration, judge ID and student verification, scoring aggregation, and sanity checks for valid form input. Later compiled into an end-to-end judging application powered by flask and firebase. </p>
				<br />
				<div className="flex justify-center">
					<Image src="/njas.png" alt="NJAS logo" width={300} height={300} className="rounded-lg" />
				</div>
			</>
		),
	},
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [onClose]);

	const content = (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20"
			onClick={onClose}
		>
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

			{/* Panel */}
			<div
				className="relative z-10 w-full max-w-2xl max-h-[75vh] sm:max-h-[80vh] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
				onClick={(e) => e.stopPropagation()}
				style={{ animation: 'modalIn 0.2s ease-out' }}
			>
				{/* Header */}
				<div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-800">
					<div className="flex-1 min-w-0">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug break-words">
							{project.title}
						</h3>
					</div>
					<button
						onClick={onClose}
						className="flex-shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						aria-label="Close"
					>
						<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{/* Body */}
				<div className="flex-1 overflow-y-auto px-6 py-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm break-words-anywhere">
					{project.description}
				</div>

				{/* Footer */}
				<div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
					>
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
						</svg>
						View on GitHub
					</a>
				</div>
			</div>
		</div>
	);

	return createPortal(content, document.body);
}

const ResearchAndProjects = () => {
	const [selected, setSelected] = useState<Project | null>(null);
	const close = useCallback(() => setSelected(null), []);

	return (
		<>
			<style>{`
				@keyframes modalIn {
					from { opacity: 0; transform: scale(0.96) translateY(8px); }
					to   { opacity: 1; transform: scale(1)    translateY(0); }
				}
			`}</style>

			{selected && <ProjectModal project={selected} onClose={close} />}

			<section className="mb-12 px-4 sm:px-0">
				{/* Conferences/Journals */}
				<h2 className="heading-secondary break-words-anywhere">Conferences/Journals</h2>
				<div className="space-y-4 mb-16 overflow-hidden">
					<p className="break-words-anywhere">
						<strong>Li, B.</strong>, Ding, K, Dera, D. (2025). MD-SA2: optimizing Segment Anything 2 for multimodal, depth-aware brain tumor segmentation in sub-Saharan populations. J. Med. Imag. 12(2).{' '}
						<a href="https://doi.org/10.1117/1.JMI.12.2.024007" target="_blank" rel="noopener noreferrer" className="break-url">
							https://doi.org/10.1117/1.JMI.12.2.024007
						</a>
					</p>
					<p className="break-words-anywhere">
						<strong>Li, B.</strong>, Serrano, K., Mazzaro, M., Wu, M., Wang, W., &amp; Zhu, M. (2023). Identification of Cyanobacteria for Harmful Algal Blooms Research Using the YOLO Framework. IEEE Annual Ubiquitous Computing, Electronics &amp; Mobile Communication Conference (UEMCON).{' '}
						<a href="https://doi.org/10.1109/uemcon59035.2023.10316078" target="_blank" rel="noopener noreferrer" className="break-url">
							https://doi.org/10.1109/uemcon59035.2023.10316078
						</a>
					</p>
				</div>

				{/* Projects */}
				<h2 className="heading-secondary">Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
					{projects.map((project, index) => (
						<button
							key={index}
							onClick={() => setSelected(project)}
							className="group text-left p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 hover:bg-white dark:hover:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 overflow-hidden"
						>
							<div className="flex items-start justify-between gap-2 mb-2">
								<h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{project.title}
								</h3>
								<svg
									className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-300 dark:text-gray-600 group-hover:text-blue-400 transition-colors"
									fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
								</svg>
							</div>
							<p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
								{project.summary}
							</p>
							<div className="flex flex-wrap gap-1.5">
								{project.tags.map(tag => (
									<span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
										{tag}
									</span>
								))}
							</div>
						</button>
					))}
				</div>

				<p className="text-base">
					<b>See more on my <a href="https://github.com/25benjaminli" target="_blank" rel="noopener noreferrer">GitHub</a> page!</b>
				</p>
			</section>
		</>
	);
};

export default ResearchAndProjects;

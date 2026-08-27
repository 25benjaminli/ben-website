'use client';

import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
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
				<p>Work done as part of Computational Imaging Lab at Cornell. Implemented <a href="https://arxiv.org/abs/1910.02600" target="_blank" rel="noopener noreferrer">evidential deep learning (EDL)</a> in a new domain (image reconstruction) for single-shot aleatoric (inherent) and epistemic (reducible with more data) uncertainty quantification. Learned the parameters to the Normal Inverse Gamma, a meta-distribution for the Gaussian, to convert grayscale to RGB. Created <a href = "https://docs.google.com/presentation/d/1yjTbxTcDUt_r4XmddTrQcxiH6axVJcGThnD2bXtMePE" target="_blank" rel="noopener noreferrer">slideshow presentation</a> and wrote <a href = "https://towardsdatascience.com/introduction-to-deep-evidential-regression-for-uncertainty-quantification/" target="_blank" rel="noopener noreferrer">article</a> for Towards Data Science, a publication with millions of monthly readers, on the subject (fortunate to receive <b>editor's pick!</b>).</p>
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
		<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20" onClick={onClose}>
			<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

			<div
				className="relative z-10 w-full max-w-xl max-h-[75vh] sm:max-h-[80vh] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
				onClick={(e) => e.stopPropagation()}
				style={{ animation: 'modalIn 0.15s ease-out' }}
			>
				<div className="flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-gray-100 dark:border-gray-800">
					<h3 className="text-base font-medium text-gray-900 dark:text-white leading-snug break-words">
						{project.title}
					</h3>
					<button
						onClick={onClose}
						className="flex-shrink-0 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
						aria-label="Close"
					>
						<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div className="flex-1 overflow-y-auto px-6 py-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm break-words-anywhere">
					{project.description}
				</div>

				<div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800">
					<a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm">
						View on GitHub &rarr;
					</a>
				</div>
			</div>
		</div>
	);

	return createPortal(content, document.body);
}

const ProjectsList = () => {
	const [selected, setSelected] = useState<Project | null>(null);
	const close = useCallback(() => setSelected(null), []);

	return (
		<>
			<style>{`
				@keyframes modalIn {
					from { opacity: 0; transform: translateY(4px); }
					to   { opacity: 1; transform: translateY(0); }
				}
			`}</style>

			{selected && <ProjectModal project={selected} onClose={close} />}

			<div className="divide-y divide-gray-100 dark:divide-gray-800">
				{projects.map((project, index) => (
					<button
						key={index}
						onClick={() => setSelected(project)}
						className="group w-full text-left py-4 flex flex-col gap-1"
					>
						<div className="flex items-baseline justify-between gap-3">
							<h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
								{project.title}
							</h3>
							<span className="text-xs text-gray-400 whitespace-nowrap">{project.tags.join(', ')}</span>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">{project.summary}</p>
					</button>
				))}
			</div>

			<p className="mt-8 text-sm">
				See more on my <a href="https://github.com/25benjaminli" target="_blank" rel="noopener noreferrer">GitHub</a> page!
			</p>
		</>
	);
};

export default ProjectsList;

import Layout from '../components/Layout';
import ProjectsList from '../components/ProjectsList';

export default function WorkPage() {
	return (
		<Layout title="Work">
			<h2 className="heading-secondary">Publications</h2>
			<div className="space-y-4 mb-10">
				<p className="break-words-anywhere">
					<strong>Li, B.</strong>, Ding, K, Dera, D. (2025). MD-SA2: optimizing Segment Anything 2 for multimodal, depth-aware brain tumor segmentation in sub-Saharan populations. <em>J. Med. Imag.</em> 12(2).{' '}
					<a href="https://doi.org/10.1117/1.JMI.12.2.024007" target="_blank" rel="noopener noreferrer" className="break-url">
						[DOI]
					</a>
				</p>
				<p className="break-words-anywhere">
					<strong>Li, B.</strong>, Serrano, K., Mazzaro, M., Wu, M., Wang, W., &amp; Zhu, M. (2023). Identification of Cyanobacteria for Harmful Algal Blooms Research Using the YOLO Framework. <em>IEEE UEMCON.</em>{' '}
					<a href="https://doi.org/10.1109/uemcon59035.2023.10316078" target="_blank" rel="noopener noreferrer" className="break-url">
						[DOI]
					</a>
				</p>
			</div>

			<h2 className="heading-secondary">Projects</h2>
			<ProjectsList />
		</Layout>
	);
}

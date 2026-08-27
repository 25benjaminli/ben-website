import Image from 'next/image';
import Link from 'next/link';
import Layout from './components/Layout';
import SocialLinks from './components/SocialLinks';

export default function HomePage() {
	return (
		<Layout>
			<div className="flex items-center gap-5 mb-10">
				<div className="profile-image flex-shrink-0">
					<Image src="/portrait.png" alt="Benjamin Li" fill className="object-cover" priority />
				</div>
				<div>
					<h1 className="text-lg font-medium text-gray-900 dark:text-white">Benjamin Li</h1>
					<p className="text-muted-small">Computer Science Student at Cornell University</p>
					<p className="text-muted-small">bl788 [at] cornell [dot] edu</p>
				</div>
			</div>

			<div className="space-y-5 text-gray-700 dark:text-gray-300">
				<p>
					Hello! 👋 I'm Benjamin, an undergraduate computer science student at Cornell University originally from Millburn, New Jersey. I like AI and computer vision, especially building models that are resource-efficient, robust to noisy data, and interpretable. I'm especially excited about AI/ML for the biomedical and environmental sciences.
				</p>
				<p>
					Currently, I'm exploring uncertainty quantification for deep learning vision algorithms as part of the Cornell Computational Imaging Lab. In the past I've conducted independent research across bioinformatics, harmful algal bloom monitoring, and medical imaging. In 2025, I was named a{' '}
					<a href="https://www.societyforscience.org/regeneron-sts/2025-finalists/" target="_blank" rel="noopener noreferrer">
						Top 40 Finalist
					</a>{' '}
					in the Regeneron Science Talent Search for my work on brain tumor segmentation using low-quality MRI scans from sub-Saharan Africa. In addition to my research, I have experience with web and app development, robotics, and quantum computing.
				</p>
				<p>
					In my spare time, I enjoy reading and writing about tech. I also like running, hiking, rock climbing, and am a bit of a geography nerd (fun fact: I'm formerly top 100 in the US for competitive GeoGuessr).{' '}
					<Link href="/photos">Here</Link> are photos from some of my favorite places so far. Thanks for stopping by!
				</p>
			</div>

			<div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
				<SocialLinks />
			</div>
		</Layout>
	);
}

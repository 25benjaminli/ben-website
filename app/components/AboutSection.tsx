import Link from 'next/link'

const AboutSection = () => {
	return (
		<div className="defaultContainer">
			<div className="space-y-6">
				<p className="text-base">
					Hello! 👋 I'm Benjamin, an undergraduate computer science student at Cornell University originally from Millburn, New Jersey. My work focuses on AI and computer vision, particularly building models that are resource-efficient, robust to noisy data, and interpretable. I'm especially excited about AI/ML for the biomedical and environmental sciences.
				</p>
				<p className="text-base">
					Currently, I'm exploring uncertainty quantification for deep learning vision algorithms as part of the Cornell Computational Imaging Lab. In the past I've conducted independent research across bioinformatics, harmful algal bloom monitoring, and medical imaging. In 2025, I was named a <a href = "https://www.societyforscience.org/regeneron-sts/2025-finalists/" target="_blank" rel="noopener noreferrer">Top 40 Finalist</a> in the Regeneron Science Talent Search for my work on brain tumor segmentation using low-quality MRI scans from sub-Saharan Africa. In addition to my research, I have experience with web and app development, robotics, and quantum computing. 
				</p>
				<p className="text-base">
					In my spare time, I enjoy reading and writing about tech and keeping detailed notes on what I learn (in my personal Obsidian vault or in <a href = "https://medium.com/@25benjaminli" target="_blank" rel="noopener noreferrer">public blogs</a>). I also like hiking, rock climbing, and all things geography (fun fact: I once reached top 100 nationally for competitive GeoGuessr duels). <Link href = "/?section=album" rel="noopener noreferrer">Here</Link> are photos from some of my favorite places so far. Thanks for stopping by!
				</p>
			</div>
		</div>
	);
};

export default AboutSection;

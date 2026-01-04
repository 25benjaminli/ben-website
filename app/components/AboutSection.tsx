import Link from 'next/link'

const AboutSection = () => {
	return (
		<div className="defaultContainer">
			<div className="space-y-6">
				<p className="text-lg">
					Hello 👋! My name is Benjamin and I'm a first-year student at Cornell University, originally from Millburn, New Jersey. I'm currently interested in AI and vision with a focus on resource efficiency, dealing with noisy data, and interpretability. 
				</p>
				<p className="text-lg">
					I also enjoy <a href = "https://medium.com/@25benjaminli" target="_blank" rel="noopener noreferrer">writing</a> about tech as well as hiking, rock climbing, and learning geography. Visit <Link href = "/?section=album" rel="noopener noreferrer">here</Link> for photos from some of my favorite places so far. Thanks for stopping by!
				</p>
			</div>
		</div>
	);
};

export default AboutSection;

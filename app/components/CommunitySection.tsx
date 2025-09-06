const CommunitySection = () => {
	return (
		<div className="pt-2 pb-4 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-2">
				<p>
                    Writing for <a href="https://medium.com/@25benjaminli" target="_blank">Medium.com</a>
                    
                </p>
                <ul>
                    <li>Topics include medical image segmentation, object detection tutorials, idea generation, and AI ethics</li>
                    <li>Some of my articles have reached thousands of readers which makes me glad; there's something I really enjoy in helping curious learners while solidifying my own understanding</li>
                </ul>
                
                <p>
                    Developed a judging app for the 2025 <a href="https://www.njas.org/" target="_blank">New Jersey Academy of Science (NJAS)</a> Symposium
                </p>
                <ul>
                    <li>Streamlined the review process for hundreds of student research projects.</li>
                    <li>Added judge ID verification, sanity checks, </li>
                </ul>

                <p>
                    Open-source work
                </p>
                <ul>
                    <li>Attended weekly core dev sessions of the Medical Open Network for AI (MONAI), made bug fix and answered community inquiries</li>
                    <li>Currently working on expository paper and from-scratch implementations of common deep learning architectures (MLP, CNN, Transformer, etc)</li>
                </ul>
			</div>
		</div>
	);
};

export default CommunitySection;

const CommunitySection = () => {
	return (
		<div className="pt-2 pb-4 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Writing for <a href="https://medium.com/@25benjaminli" target="_blank">Medium.com</a></h3>
                <ul>
                    <li>Topics include medical image segmentation, object detection tutorials, idea generation, and AI ethics</li>
                    <li>Some of my articles have reached thousands of readers, which makes me glad; there's something I really enjoy in helping curious learners while solidifying my own understanding</li>
                </ul>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white"><a href="https://www.njas.org/" target="_blank">New Jersey Academy of Sciences (NJAS)</a> Symposium</h3>
                <ul>
                    <li>Streamlined the review process for 80 judges and over 200 student research projects</li>
                    <li>Added google forms/sheets API integration, judge ID and student verification, sanity checks for valid form input</li>
                </ul>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Open-source work</h3>
                <ul>
                    <li>Reached out to Medical Open Network for AI (MONAI) core dev team, invited to attend weekly meetings, did bug fixing and answering community inquiries</li>
                    <li>Currently working on an expository paper and from-scratch implementations of common deep learning architectures (MLP, CNN, Transformer, etc)</li>
                </ul>
			</div>
		</div>
	);
};

export default CommunitySection;

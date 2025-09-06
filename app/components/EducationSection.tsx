import Timeline from './Timeline';

const EducationSection = () => {
	const educations = [
		{
			role: 'Cornell University',
			org: '',
			period: 'Summer 2025',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>Fall Semester courses: MATH 2210 (Linear Algebra), CS 2110 (Object-Oriented Programming and Data Structures), COGST 2801 (Intro to Game Theory), STS 2810 (Science, Nature, and Knowledge)</li>
				</ul>
			)
		},
		{
			role: 'Millburn High School',
			org: '',
			period: '2021 - 2025',
			highlights: (
				<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-disc list-inside">
					<li>President of Computer Science Club</li>
					<ul className="ml-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 list-[circle] list-inside">
						<li>Developed & maintained kiosk security app serving 1600 students</li>
						<li>Built websites for school clubs, taught lessons on frontend/backend web dev and artificial intelligence</li>
						<li>Hosted guest speakers in AI & ethics, medical imaging, and robotics</li>
						<li>Founding editor-in-chief for "Catalyst" CS & engineering magazine</li>
					</ul>
					<li>Top 5%, high honors</li>
					<li>SAT: 1560/1600, PSAT: 1510/1520 (National Merit Finalist)</li>
				</ul>
			),
		},
	];

	return <Timeline arr={educations} title={"Education"} />;
};

export default EducationSection;

import Timeline from './Timeline';

const EducationSection = () => {
	const educations = [
		{
			role: 'Cornell University',
			org: '',
			period: '2025 - 2029',
			highlights: (
				<ul>
					<li>Fall Semester courses: MATH 2210 (Linear Algebra), CS 2110 (Object-Oriented Programming and Data Structures), COGST 2801 (Intro to Game Theory), STS 2810 (Science, Nature, and Knowledge)</li>
				</ul>
			)
		},
		{
			role: 'Millburn High School',
			org: '',
			period: '2021 - 2025',
			highlights: (
				<ul>
					<li>Top 5%, high honors</li>
					<li>SAT: 1560/1600, PSAT: 1510/1520 (National Merit Finalist)</li>
				</ul>
			),
		},
	];

	return <Timeline arr={educations} title={"Education"} />;
};

export default EducationSection;

import Timeline from './Timeline';

const EducationSection = () => {
	const educations = [
		{
			role: 'Cornell University',
			period: 'Expected 2025 - 2028',
			highlights: (
				<ul>
					<li>Relevant Coursework: Linear Algebra, Object-Oriented Programming and Data Structures, Game Theory</li>
					<li>Organizations: Cornell Data Science, Mapping Society</li>
					<li>GPA: 4.00</li>
				</ul>
			)
		},
		{
			role: 'Millburn High School',
			period: '2021 - 2025',
			highlights: (
				<ul>
					<li>SAT: 1560/1600, PSAT: 1510/1520 (National Merit Finalist)</li>
					<li>Top 5% of graduating class</li>
				</ul>
			),
		},
	];

	return <Timeline arr={educations} title={"Education"} />;
};

export default EducationSection;

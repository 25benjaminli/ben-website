const links = [
	{ label: 'GitHub', href: 'https://github.com/25benjaminli' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-li-613a16230/' },
	{ label: 'Medium', href: 'https://medium.com/@25benjaminli/' },
	{ label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=JRj8RfIAAAAJ&hl=en' },
];

const SocialLinks = () => {
	return (
		<div className="flex flex-wrap gap-x-4 gap-y-1">
			{links.map((link) => (
				<a
					key={link.label}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="social-link"
				>
					{link.label}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;

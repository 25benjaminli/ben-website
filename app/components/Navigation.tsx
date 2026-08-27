'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
	{ href: '/', label: 'About' },
	{ href: '/work', label: 'Work' },
	{ href: '/photos', label: 'Photos' },
	{ href: '/resume.pdf', label: 'Resume', external: true },
];

const Navigation = () => {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 flex flex-nowrap items-center justify-between gap-x-2 sm:gap-x-4">
				<Link href="/" className="text-sm font-medium text-gray-900 dark:text-white no-underline whitespace-nowrap">
					Benjamin Li
				</Link>

				<div className="flex items-center gap-3 sm:gap-5 flex-nowrap">
					{navigationItems.map((item) =>
						item.external ? (
							<a
								key={item.href}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="nav-link no-underline whitespace-nowrap"
							>
								{item.label}
							</a>
						) : (
							<Link
								key={item.href}
								href={item.href}
								className={`no-underline whitespace-nowrap ${pathname === item.href ? 'nav-link-active' : 'nav-link'}`}
							>
								{item.label}
							</Link>
						)
					)}
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
};

export default Navigation;

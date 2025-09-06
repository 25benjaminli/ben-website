import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

interface ProfileSectionProps {
	scrollToSection: (sectionId: string) => void;
}

const ProfileSection = ({ scrollToSection }: ProfileSectionProps) => {
	const navigationItems = [
		{ key: 'about', label: 'About Me' },
		{ key: 'skills', label: 'Core Skills' },
		{ key: 'experience', label: 'Experience' },
		{ key: 'education', label: 'Education' },
		{ key: 'honors', label: 'Honors' },
		{ key: 'hobbies', label: 'Hobbies' }
	];

	return (
		<div className="w-full py-8 md:py-0 bg-white dark:bg-gray-900 px-6 sm:pt-0">
			{/* Theme Toggle Button */}
			<div className="flex justify-end mb-4">
				<ThemeToggle />
			</div>
			
			<div className="space-y-6 text-center">
				<div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
					<div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
						<Image src="/portrait.jpg" alt="Profile" fill className="object-cover" priority />
					</div>
				</div>

				<div className="space-y-3">
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Benjamin Li</h1>
					<h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Computer Science Student at Cornell University</h2>
					<div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4" />
				</div>

				{/* Navigation Buttons */}
				<div className="space-y-3">
					<p className="text-sm text-gray-600 dark:text-gray-400">Navigate to:</p>
					<div className="flex flex-wrap gap-2 justify-center">
						{navigationItems.map((item) => (
							<button
								key={item.key}
								onClick={() => scrollToSection(item.key)}
								className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								{item.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;

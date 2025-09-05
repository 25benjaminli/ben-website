import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HobbiesSection from './components/HobbiesSection';
import ProjectsSection from './components/ProjectsSection';
import HonorsSection from './components/HonorsSection';
export default function MinimalistPortfolio() {

	// TODO: refactor to add light mode/dark mode toggle button
	return (
		<main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-10">
				{/* Left Column - Profile */}
				<div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
					<ProfileSection />
				</div>

				{/* Right Column - Skills, Experience, and Hobbies */}
				<div className="md:col-span-7 flex flex-col">
					<div className="">
						<SkillsSection />
					</div>

					<div>
						<ExperienceSection />
					</div>

					<div>
						<ProjectsSection />
					</div>

					<div>
						<HonorsSection />
					</div>

					<div>
						<HobbiesSection />
					</div>
				</div>
			</div>
		</main>
	);
}

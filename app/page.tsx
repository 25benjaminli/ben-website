'use client';

import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HobbiesSection from './components/HobbiesSection';
import EducationSection from './components/EducationSection';
import HonorsSection from './components/HonorsSection';
import AboutSection from './components/AboutSection';
import CommunitySection from './components/CommunitySection';

export default function MinimalistPortfolio() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 pb-16 sm:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-10">
                {/* Left Column - Profile */}
                <div className="lg:col-span-3 lg:border-r border-gray-200 dark:border-gray-800 pb-4 lg:pb-0">
					<div className="lg:sticky lg:top-2 lg:pt-2">
						<ProfileSection scrollToSection={scrollToSection} />
					</div>
				</div>

                {/* Right Column - All Sections */}
                <div className="lg:col-span-7 flex flex-col min-h-screen">
                    <div id="about" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-1 px-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                About Me
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <AboutSection />
                    </div>

                    <div id="skills" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-1 px-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Core Skills
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <SkillsSection />
                    </div>

                    <div id="experience" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-1 px-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Selected Experience & Projects
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <ExperienceSection />
                    </div>

                    <div id="education" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-1 px-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Education
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <EducationSection />
                    </div>

                    <div id="honors" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-1 px-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Selected Honors
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <HonorsSection />
                    </div>

                    <div id="community" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-1 px-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Community Involvement
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <CommunitySection />
                    </div>

                    <div id="hobbies" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-1 px-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Hobbies
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <HobbiesSection />
                    </div>
                </div>
            </div>
        </main>
    );
}
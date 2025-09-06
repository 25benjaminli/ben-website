'use client';

import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HobbiesSection from './components/HobbiesSection';
import EducationSection from './components/EducationSection';
import HonorsSection from './components/HonorsSection';
import AboutSection from './components/AboutSection';

export default function MinimalistPortfolio() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 pb-16 sm:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-10">
                {/* Left Column - Profile */}
                <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                    <div className="md:sticky md:top-4 md:pt-8">
                        <ProfileSection scrollToSection={scrollToSection} />
                    </div>
                </div>

                {/* Right Column - All Sections */}
                <div className="md:col-span-7 flex flex-col min-h-screen">
                    {/* About Me Section */}
                    <div id="about" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-2 px-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                About Me
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <AboutSection />
                    </div>

                    {/* Core Skills Section */}
                    <div id="skills" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="pt-4 pb-2 px-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Core Skills
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <SkillsSection />
                    </div>

                    {/* Experience Section */}
                    <div id="experience" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="py-6 px-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Experience
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <ExperienceSection />
                    </div>

                    {/* Education Section */}
                    <div id="education" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="py-6 px-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Education
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <EducationSection />
                    </div>

                    {/* Honors Section */}
                    <div id="honors" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="py-6 px-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Honors
                            </h3>
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                        </div>
                        <HonorsSection />
                    </div>

                    {/* Hobbies Section */}
                    <div id="hobbies" className="border-b border-gray-200 dark:border-gray-800">
                        <div className="py-6 px-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Community Involvement & Hobbies
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
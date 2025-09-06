'use client';

import { useState } from 'react';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HobbiesSection from './components/HobbiesSection';
import EducationSection from './components/EducationSection';
import HonorsSection from './components/HonorsSection';

export default function MinimalistPortfolio() {
    const [sectionsOpen, setSectionsOpen] = useState({
        skills: false,
        experience: false,
        education: false,
        honors: false,
        hobbies: false
    });

    const toggleSection = (section: keyof typeof sectionsOpen) => {
        setSectionsOpen(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-10">
                {/* Left Column - Profile */}
                <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:pt-16">
					<ProfileSection />
				</div>

                {/* Right Column - Collapsible Sections */}
                <div className="md:col-span-7 flex flex-col">
                    {/* Skills Section */}
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <button 
                            onClick={() => toggleSection('skills')}
                            className="w-full px-3 py-4 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Core Skills</h3>
                            <svg 
                                className={`w-5 h-5 text-gray-500 transition-transform ${sectionsOpen.skills ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sectionsOpen.skills && (
                            <div className="overflow-hidden">
                                <SkillsSection />
                            </div>
                        )}
                    </div>

                    {/* Experience Section */}
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <button 
                            onClick={() => toggleSection('experience')}
                            className="w-full px-3 py-4 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h3>
                            <svg 
                                className={`w-5 h-5 text-gray-500 transition-transform ${sectionsOpen.experience ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sectionsOpen.experience && (
                            <div className="overflow-hidden">
                                <ExperienceSection />
                            </div>
                        )}
                    </div>

                    {/* Education Section */}
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <button 
                            onClick={() => toggleSection('education')}
                            className="w-full px-3 py-4 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
                            <svg 
                                className={`w-5 h-5 text-gray-500 transition-transform ${sectionsOpen.education ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sectionsOpen.education && (
                            <div className="overflow-hidden">
                                <EducationSection />
                            </div>
                        )}
                    </div>

                    {/* Honors Section */}
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <button 
                            onClick={() => toggleSection('honors')}
                            className="w-full px-3 py-4 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Honors</h3>
                            <svg 
                                className={`w-5 h-5 text-gray-500 transition-transform ${sectionsOpen.honors ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sectionsOpen.honors && (
                            <div className="overflow-hidden">
                                <HonorsSection />
                            </div>
                        )}
                    </div>

                    {/* Hobbies Section */}
                    <div>
                        <button 
                            onClick={() => toggleSection('hobbies')}
                            className="w-full px-3 py-4 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Involvement & Hobbies</h3>
                            <svg 
                                className={`w-5 h-5 text-gray-500 transition-transform ${sectionsOpen.hobbies ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sectionsOpen.hobbies && (
                            <div className="overflow-hidden">
                                <HobbiesSection />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
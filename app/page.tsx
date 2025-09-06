'use client';

import { useState } from 'react';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HobbiesSection from './components/HobbiesSection';
import EducationSection from './components/EducationSection';
import HonorsSection from './components/HonorsSection';

export default function MinimalistPortfolio() {
    const [activeSection, setActiveSection] = useState('skills');

    const sections = {
        skills: { component: <SkillsSection />, title: 'Core Skills' },
        experience: { component: <ExperienceSection />, title: 'Experience' },
        education: { component: <EducationSection />, title: 'Education' },
        honors: { component: <HonorsSection />, title: 'Honors' },
        hobbies: { component: <HobbiesSection />, title: 'Community Involvement & Hobbies' }
    };

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            {/* Profile Section - Smaller, with Navigation */}
            <div className="w-full border-b border-gray-200 dark:border-gray-800">
                <ProfileSection 
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
            </div>

            {/* Active Content Section */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="py-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        {sections[activeSection as keyof typeof sections].title}
                    </h2>
                    {sections[activeSection as keyof typeof sections].component}
                </div>
            </div>
        </main>
    );
}
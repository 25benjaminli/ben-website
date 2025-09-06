'use client';

import { useState } from 'react';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HobbiesSection from './components/HobbiesSection';
import EducationSection from './components/EducationSection';
import HonorsSection from './components/HonorsSection';
import CollapsibleSection from './components/CollapsibleSection';

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
        <main className="min-h-screen bg-white dark:bg-gray-900 pb-16 sm:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-10">
                {/* Left Column - Profile */}
                <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                    <div className="md:sticky md:top-4 md:pt-8">
                        <ProfileSection />
                    </div>
                </div>

                {/* Right Column - Collapsible Sections */}
                <div className="md:col-span-7 flex flex-col min-h-screen">
                    <CollapsibleSection
                        title="Core Skills"
                        isOpen={sectionsOpen.skills}
                        onToggle={() => toggleSection('skills')}
                    >
                        <SkillsSection />
                    </CollapsibleSection>

                    <CollapsibleSection
                        title="Experience"
                        isOpen={sectionsOpen.experience}
                        onToggle={() => toggleSection('experience')}
                    >
                        <ExperienceSection />
                    </CollapsibleSection>

                    <CollapsibleSection
                        title="Education"
                        isOpen={sectionsOpen.education}
                        onToggle={() => toggleSection('education')}
                    >
                        <EducationSection />
                    </CollapsibleSection>

                    <CollapsibleSection
                        title="Honors"
                        isOpen={sectionsOpen.honors}
                        onToggle={() => toggleSection('honors')}
                    >
                        <HonorsSection />
                    </CollapsibleSection>

                    <CollapsibleSection
                        title="Community Involvement & Hobbies"
                        isOpen={sectionsOpen.hobbies}
                        onToggle={() => toggleSection('hobbies')}
                        showBorder={false}
                    >
                        <HobbiesSection />
                    </CollapsibleSection>
                </div>
            </div>
        </main>
    );
}
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Layout from './components/Layout';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import HonorsSection from './components/HonorsSection';
import CommunitySection from './components/CommunitySection';
import HobbiesSection from './components/HobbiesSection';

export default function HomePage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [currentSection, setCurrentSection] = useState('about');

    useEffect(() => {
        const section = searchParams.get('section') || 'about';
        setCurrentSection(section);
    }, [searchParams]);

    const handleSectionChange = (section: string) => {
        setCurrentSection(section);
        router.push(`/?section=${section}`);
    };

    const renderCurrentSection = () => {
        switch (currentSection) {
            case 'skills':
                return <SkillsSection />;
            case 'experience':
                return <ExperienceSection />;
            case 'education':
                return <EducationSection />;
            case 'honors':
                return <HonorsSection />;
            case 'community':
                return <CommunitySection />;
            case 'hobbies':
                return <HobbiesSection />;
            default:
                return <AboutSection />;
        }
    };

    const getSectionTitle = () => {
        switch (currentSection) {
            case 'skills':
                return 'Skills';
            case 'experience':
                return 'Selected Experience & Projects';
            case 'education':
                return 'Education';
            case 'honors':
                return 'Selected Honors';
            case 'community':
                return 'Community Involvement';
            case 'hobbies':
                return 'Hobbies';
            default:
                return 'About Me';
        }
    };

    return (
        <Layout 
            title={getSectionTitle()} 
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
        >
            {renderCurrentSection()}
        </Layout>
    );
}
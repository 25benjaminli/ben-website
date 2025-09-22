'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Layout from './components/Layout';
import AboutSection from './components/AboutSection';
import ResearchAndProjects from './components/ResearchAndProjectsSection';
import EducationSection from './components/EducationSection';
import ResumeSection from './components/ResumeSection';
import HonorsSection from './components/HonorsSection';

function HomePageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [currentSection, setCurrentSection] = useState('about');

    useEffect(() => {
        // Only access searchParams on the client side
        if (typeof window !== 'undefined') {
            const section = searchParams?.get('section') || 'about';
            setCurrentSection(section);
        }
    }, [searchParams]);

    const handleSectionChange = (section: string) => {
        setCurrentSection(section);
        router.push(`/?section=${section}`);
    };

    const renderCurrentSection = () => {
        switch (currentSection) {
            case 'education':
                return <EducationSection />;
            case 'researchandprojects':
                return <ResearchAndProjects />;
            case 'resume':
                return <ResumeSection />;
            case 'honors':
                return <HonorsSection />;
            default:
                return <AboutSection />;
        }
    };

    const getSectionTitle = () => {
        switch (currentSection) {
            case 'education':
                return 'Education';
            case 'researchandprojects':
                return 'Publications & Projects';
            case 'resume':
                return 'Resume';
            case 'honors':
                return 'Honors';
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

export default function HomePage() {
    return (
        <Suspense fallback={
            <Layout 
                title="About Me" 
                currentSection="about"
                onSectionChange={() => {}}
            >
                <AboutSection />
            </Layout>
        }>
            <HomePageContent />
        </Suspense>
    );
}
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Layout from './components/Layout';
import AboutSection from './components/AboutSection';
import ResearchAndProjects from './components/ResearchAndProjectsSection';
import AlbumSection from './components/AlbumSection';

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
            case 'researchandprojects':
                return <ResearchAndProjects />;
            case 'album':
                return <AlbumSection />;
            default:
                return <AboutSection />;
        }
    };

    const getSectionTitle = () => {
        switch (currentSection) {
            case 'researchandprojects':
                return 'Research & Projects';
            case 'resume':
                return 'Resume';
            case 'about':
                return 'About Me';
            case 'album':
                return 'Photo Album';
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
'use client';

import { ReactNode } from 'react';
import ProfileSection from './ProfileSection';
import Navigation from './Navigation';

interface LayoutProps {
    children: ReactNode;
    title: string;
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const Layout = ({ children, title, currentSection, onSectionChange }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navigation currentSection={currentSection} onSectionChange={onSectionChange} />
            
            <main className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 px-6 py-8">
                    {/* Left Column - Profile */}
                    <div className="lg:col-span-3">
                        <div className="lg:sticky lg:top-24">
                            <ProfileSection />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                            <div className="pt-8 pb-4 px-8">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                                    {title}
                                </h1>
                                <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
                            </div>
                            <div className="px-8 pb-12 leading-relaxed text-gray-700 dark:text-gray-300">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;
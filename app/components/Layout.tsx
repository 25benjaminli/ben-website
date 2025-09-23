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
        <div className="page-container">
            <Navigation currentSection={currentSection} onSectionChange={onSectionChange} />
            
            <div className="sidebar-container">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="w-full max-w-sm mx-auto pt-4">
                        <ProfileSection />
                    </div>
                </div>
            </div>

            <main className="main-content-container">
                <div className="content-wrapper">
                    {/* Mobile Profile Section - Only show on About section */}
                    {currentSection === 'about' && (
                        <div className="lg:hidden mb-8">
                            <ProfileSection />
                        </div>
                    )}

                    {/* Content */}
                    <div className="max-w-5xl 2xl:max-w-6xl">
                        <div className="content-card">
                            <div className="pt-8 pb-4 px-8">
                                <h1 className="heading-primary">
                                    {title}
                                </h1>
                                <div className="divider-horizontal" />
                            </div>
                            <div className="px-8 pb-12 text-body">
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
'use client';

interface NavigationProps {
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
    const navigationItems = [
        { key: 'about', label: 'About' },
        { key: 'education', label: 'Education' },
        { key: 'researchandprojects', label: 'Research & Projects' },
        { key: 'honors', label: 'Honors' },
        { key: 'resume', label: 'Resume' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-center py-2 sm:py-6">
                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => onSectionChange(item.key)}
                                className={`
                                    nav-button
                                    ${currentSection === item.key
                                        ? 'nav-button-active'
                                        : 'nav-button-inactive'
                                    }
                                `}
                            >
                                {item.label}
                                {/* Active underline */}
                                <span 
                                    className={`
                                        nav-underline
                                        ${currentSection === item.key ? 'nav-underline-active' : 'nav-underline-inactive'}
                                    `}
                                />
                                {/* Hover underline - only show when not active */}
                                {currentSection !== item.key && (
                                    <span 
                                        className="nav-underline nav-underline-hover"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                    
                    {/* Mobile Navigation - Flex Wrap */}
                    <div className="sm:hidden w-full">
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-1">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => onSectionChange(item.key)}
                                    className={`
                                        nav-button-mobile
                                        ${currentSection === item.key
                                            ? 'nav-button-active'
                                            : 'nav-button-inactive'
                                        }
                                    `}
                                >
                                    {item.label}
                                    {/* Mobile underline */}
                                    <span 
                                        className={`
                                            nav-underline
                                            ${currentSection === item.key ? 'nav-underline-active' : 'nav-underline-inactive'}
                                        `}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
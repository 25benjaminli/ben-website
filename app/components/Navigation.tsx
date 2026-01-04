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
        { key: 'resume', label: 'Resume' },
        { key: 'album', label: 'Photo Album' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-center py-2 sm:py-6">
                    <div className="hidden lg:flex space-x-8">
                        {navigationItems.map((item) => (
                            item.key === 'resume' ? (
                                <a
                                    key={item.key}
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-button nav-button-inactive no-underline"
                                >
                                    {item.label}
                                </a>
                            ) : (
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
                                    <span 
                                        className={`
                                            nav-underline
                                            ${currentSection === item.key ? 'nav-underline-active' : 'nav-underline-inactive'}
                                        `}
                                    />
                                    {currentSection !== item.key && (
                                        <span 
                                            className="nav-underline nav-underline-hover"
                                        />
                                    )}
                                </button>
                            )
                        ))}
                    </div>
                    
                    <div className="lg:hidden w-full">
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-1">
                            {navigationItems.map((item) => (
                                item.key === 'resume' ? (
                                    <a
                                        key={item.key}
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="nav-button-mobile nav-button-inactive no-underline"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
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
                                        <span 
                                            className={`
                                                nav-underline
                                                ${currentSection === item.key ? 'nav-underline-active' : 'nav-underline-inactive'}
                                            `}
                                        />
                                    </button>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
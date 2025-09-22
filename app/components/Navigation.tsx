'use client';

interface NavigationProps {
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
    const navigationItems = [
        { key: 'about', label: 'About' },
        { key: 'skills', label: 'Skills' },
        { key: 'experience', label: 'Experience' },
        { key: 'education', label: 'Education' },
        { key: 'honors', label: 'Honors' },
        { key: 'community', label: 'Community' },
        { key: 'hobbies', label: 'Hobbies' }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-center py-4 sm:py-6">
                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => onSectionChange(item.key)}
                                className={`
                                    relative px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out group
                                    ${currentSection === item.key
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                                    }
                                `}
                            >
                                {item.label}
                                {/* Active underline */}
                                <span 
                                    className={`
                                        absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-in-out
                                        ${currentSection === item.key ? 'w-full' : 'w-0'}
                                    `}
                                />
                                {/* Hover underline - only show when not active */}
                                {currentSection !== item.key && (
                                    <span 
                                        className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                    
                    {/* Mobile Navigation - Horizontal Scroll */}
                    <div className="sm:hidden w-full">
                        <div className="flex space-x-6 overflow-x-auto scrollbar-hide px-4">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => onSectionChange(item.key)}
                                    className={`
                                        relative flex-shrink-0 px-3 py-3 text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap
                                        ${currentSection === item.key
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-600 dark:text-gray-400'
                                        }
                                    `}
                                >
                                    {item.label}
                                    {/* Mobile underline */}
                                    <span 
                                        className={`
                                            absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-in-out
                                            ${currentSection === item.key ? 'w-full' : 'w-0'}
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
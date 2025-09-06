import React from 'react';

interface CollapsibleSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    showBorder?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    isOpen,
    onToggle,
    children,
    showBorder = true
}) => {
    return (
        <div className={showBorder ? "border-b border-gray-200 dark:border-gray-700" : ""}>
            <button 
                onClick={onToggle}
                className="w-full px-3 py-4 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                {children}
            </div>
        </div>
    );
};

export default CollapsibleSection;

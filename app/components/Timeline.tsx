import React from 'react';

interface TimelineProps {
    arr: Array<{
        role: string;
        period: string;
        highlights: React.ReactNode;
    }>;
	title: string;
}

function Timeline({ arr }: TimelineProps) {
	return (
		<div className="defaultContainer">
			<div className="space-y-4">
				{arr.map((exp, index) => (
					<div key={index} className="relative">
						<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
							<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
							<div className="space-y-1">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between">
									<h3 className="text-lg font-medium text-gray-900 dark:text-white">{exp.role}</h3>
									<span className="text-base text-gray-500 dark:text-gray-400">{exp.period}</span>
								</div>
								<div className="mt-2">{exp.highlights}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Timeline;

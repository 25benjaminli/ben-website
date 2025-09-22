import React from 'react';

interface TimelineProps {
    arr: Array<{
        role: string;
        org: string;
        period: string;
        highlights: React.ReactNode;
    }>;
	title: string;
}

function Timeline({ arr }: TimelineProps) {
	return (
		<div className="defaultContainer">
			<div className="element-spacing ">
				{/* <div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">{title}</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div> */}

				<div className="timeline-container">
					{arr.map((exp, index) => (
						<div key={index} className="relative">
							<div className="timeline-item">
								<div className="timeline-dot" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h3 className="text-lg font-medium text-gray-900 dark:text-white">{exp.role}</h3>
										<span className="text-base text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									{exp.org.length > 0 && <p className="text-base font-medium text-gray-600 dark:text-gray-300">{exp.org}</p>}
									<div className="mt-2">{exp.highlights}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Timeline;

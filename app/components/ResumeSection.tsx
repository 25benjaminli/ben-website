const ResumeSection = () => {
	return (
		<section className="mb-12">
			<div className="w-full">
				{/* PDF Embed with fallback */}
				<div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
					<object
						data="/resume.pdf"
						type="application/pdf"
						width="100%"
						height="800"
						className="min-h-[800px]"
					>
						{/* Fallback content if PDF can't be displayed */}
						<div className="flex flex-col items-center justify-center p-8 space-y-4">
							<div className="text-center">
								<svg 
									className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" 
									fill="none" 
									stroke="currentColor" 
									viewBox="0 0 24 24"
								>
									<path 
										strokeLinecap="round" 
										strokeLinejoin="round" 
										strokeWidth={2} 
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
									/>
								</svg>
								<h3 className="heading-tertiary mb-2">Resume PDF</h3>
								<p className="text-muted mb-4">
									Your browser doesn't support embedded PDFs, but you can download and view my resume using the link below.
								</p>
								<a
									href="/resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
								>
									<svg 
										className="w-4 h-4 mr-2" 
										fill="none" 
										stroke="currentColor" 
										viewBox="0 0 24 24"
									>
										<path 
											strokeLinecap="round" 
											strokeLinejoin="round" 
											strokeWidth={2} 
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
										/>
									</svg>
									Download Resume (PDF)
								</a>
							</div>
						</div>
					</object>
				</div>
				
				{/* Additional download link for convenience */}
				<div className="mt-4 text-center">
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
					>
						Open resume in new tab →
					</a>
				</div>
			</div>
		</section>
	);
};

export default ResumeSection;
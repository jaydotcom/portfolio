const SkillsSection = () => {
	const skills = [
		{
			category: 'Leadership & Strategy',
			items: ['Team Building', 'Technical Roadmaps', 'Agile/Scrum', '0→1 Product Development'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
				</svg>
			),
		},
		{
			category: 'Startup Skills',
			items: ['MVP Architecture', 'Rapid Prototyping', 'Tech Due Diligence', 'Budget Optimization', 'Fundraising Support'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			),
		},
		{
			category: 'Backend',
			items: ['Node.js/NestJS', 'Python', 'Java/Spring', 'C#/.NET', 'PHP/Symfony', 'C/C++', 'SQL & NoSQL Databases'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
				</svg>
			),
		},
		{
			category: 'Frontend',
			items: ['React', 'Angular', 'React Native', 'TypeScript', 'JavaScript', 'Flutter', 'Tailwind', 'Bootstrap'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
				</svg>
			),
		},
		{
			category: 'Cloud & DevOps',
			items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
				</svg>
			),
		},
		{
			category: 'AI & Automation',
			items: ['AI Roadmaps', 'LLM Integration', 'Agent Development', 'AI-Assisted Coding', 'Pipeline Optimization', 'Prompt Engineering'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1v1a7 7 0 01-7 7v1a2 2 0 11-4 0v-1a7 7 0 01-7-7v-1H2a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2 2 0 0112 2zM7.05 14.95a5 5 0 109.9 0 5 5 0 00-9.9 0z" />
				</svg>
			),
		},
	];

	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Core Skills</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category}>
							<div className="flex items-center space-x-2 mb-2">
								{skillGroup.icon}
								<h4 className="text-sm font-medium text-gray-600">{skillGroup.category}</h4>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span key={skill} className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;

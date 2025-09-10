const ExperienceSection = () => {
	const experiences: Array<{
		role: string;
		company: string;
		companyUrl?: string;
		period: string;
		highlights: string;
	}> = [
		{
			role: 'Tech Lead & MVP Architect',
			company: 'Solence',
			companyUrl: 'https://www.solence.care/',
			period: 'Feb 2025 - Present',
			highlights: 'Hands-on stabilization of healthtech platform. Built AI-driven features while securing non-dilutive funding',
		},
		{
			role: 'Tech Lead & Product Builder',
			company: 'Oxygen Solutions',
			companyUrl: 'https://www.oxygen-solutions.ai/',
			period: 'Oct 2024 - Present',
			highlights: 'Transformed legacy consulting firm into modern SaaS. Coded the MVP, built the team, shipped to production',
		},
		{
			role: 'Tech Lead & Startup Advisor',
			company: 'Coup de pousse',
			companyUrl: 'https://www.coupdepousse.com/',
			period: 'Feb 2023 - Present',
			highlights: 'From internal project to thousands of users. Built core features hands-on, then scaled the engineering team',
		},
		{
			role: 'Co-founder & CTPO',
			company: 'Eelway',
			companyUrl: 'https://www.eelway.com/en',
			period: 'Oct 2015 - Jun 2020',
			highlights: 'Scaled from 1 truck to international platform. Raised 2M€, partnerships with Accor, SNCF. Acquired by La Poste',
		},
		{
			role: 'Senior Developer → Ad Tech Expert',
			company: 'Pearltrees',
			companyUrl: 'https://www.pearltrees.com/',
			period: 'May 2012 - Jul 2015',
			highlights: 'Led Flash→HTML5 migration, built full monetization infrastructure (freemium, ad stack, A/B testing)',
		},
		{
			role: 'Database Software Engineer',
			company: 'SunGard',
			companyUrl: 'https://www.linkedin.com/company/sungard-availability-services-france/?originalSubdomain=fr',
			period: 'Jan 2008 - Aug 2009',
			highlights: 'Built high-performance distributed systems. C/C++, Python, distributed Oracle. Complex data modeling & scalable architecture',
		},
	];

	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900">{exp.role}</h4>
										<span className="text-sm text-gray-500">{exp.period}</span>
									</div>
									{exp.companyUrl ? (
										<a 
											href={exp.companyUrl} 
											target="_blank" 
											rel="noopener noreferrer" 
											className="text-sm font-medium text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 group"
										>
											{exp.company}
											<svg 
												className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" 
												viewBox="0 0 20 20" 
												fill="currentColor"
											>
												<path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
											</svg>
										</a>
									) : (
										<p className="text-sm font-medium text-gray-600">{exp.company}</p>
									)}
									<p className="text-sm text-gray-600 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;

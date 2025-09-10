const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Tech Lead & MVP Architect',
			company: 'Solence',
			period: 'Feb 2025 - Present',
			highlights: 'Hands-on stabilization of healthtech platform. Built AI-driven features while securing non-dilutive funding',
		},
		{
			role: 'Tech Lead & Product Builder',
			company: 'Oxygen Solutions',
			period: 'Oct 2024 - Present',
			highlights: 'Transformed legacy consulting firm into modern SaaS. Coded the MVP, built the team, shipped to production',
		},
		{
			role: 'Tech Lead & Startup Advisor',
			company: 'Coup de pousse',
			period: 'Feb 2023 - Present',
			highlights: 'From internal project to thousands of users. Built core features hands-on, then scaled the engineering team',
		},
		{
			role: 'Co-founder & CTPO',
			company: 'Eelway',
			period: 'Oct 2015 - Jun 2020',
			highlights: 'Scaled from 1 truck to international platform. Raised 2M€, partnerships with Accor, SNCF. Acquired by La Poste',
		},
		{
			role: 'Senior Developer → Ad Tech Expert',
			company: 'Pearltrees',
			period: 'May 2012 - Jul 2015',
			highlights: 'Led Flash→HTML5 migration, built full monetization infrastructure (freemium, ad stack, A/B testing)',
		},
		{
			role: 'Database Software Engineer',
			company: 'SunGard',
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
									<p className="text-sm font-medium text-gray-600">{exp.company}</p>
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

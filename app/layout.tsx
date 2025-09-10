import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Julien Alary - Tech Lead & MVP Builder',
	description:
		'Serial entrepreneur and tech lead specializing in zero-to-one products. Scaled Eelway from 0 to 2M€. Expert in MVP development, tech team building, and rapid product iteration.',
	icons: {
		icon: '/favicon.svg',
		shortcut: '/favicon.svg',
		apple: '/favicon.svg',
	},
	keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'Tech Lead',
		'MVP Development',
		'Zero to One',
		'Startup Technical Advisor',
		'JavaScript',
		'TypeScript',
		'React',
		'Python',
		'Firebase',
		'Node.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Julien Alary',
	],
	authors: [{ name: 'Julien Alary' }],
	creator: 'Julien Alary',
	openGraph: {
		title: 'Julien Alary - Tech Lead & MVP Builder',
		description: 'Serial entrepreneur and tech lead specializing in zero-to-one products. Scaled Eelway from 0 to 2M€. Expert in MVP development, tech team building, and rapid product iteration.',
		url: 'https://julienalary.com',
		siteName: 'Julien Alary - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Julien Alary - Tech Lead & MVP Builder Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Julien Alary - Tech Lead & MVP Builder',
		description: 'Serial entrepreneur and tech lead specializing in zero-to-one products. Scaled Eelway from 0 to 2M€. Expert in MVP development, tech team building, and rapid product iteration.',
		creator: '@jalary_',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}

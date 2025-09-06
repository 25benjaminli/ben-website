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
	title: 'Benjamin Li\'s Portfolio',
	description:
		'Welcome to my website!',
	keywords: [
		'Software Developer',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Machine Learning',
		'Deep Learning',
		'AI'
	],
	authors: [{ name: 'Benjamin Li' }],
	creator: 'Benjamin Li',
	openGraph: {
		title: 'Benjamin Li - Developer Portfolio',
		description: 'Passionate about AI/ML solutions for healthcare and the environment',
		url: 'https://your-domain.com',
		siteName: 'Benjamin Li\'s Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Benjamin Li\'s Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
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

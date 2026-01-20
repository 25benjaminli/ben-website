import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Analytics } from "@vercel/analytics/react"
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Benjamin Li',
	description: "My name is Benjamin and I'm an undergraduate student at Cornell University, originally from Millburn, New Jersey. I'm currently interested in AI and vision with a focus on resource efficiency, dealing with noisy data, and interpretability.", 
	keywords: [
		'Computer Science',
		'Software Developer',
		'Research',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Problem Solving',
		'Web Development',
		'Backend Development',
		'Machine Learning',
		'Deep Learning',
		'AI',
		'Cornell'
	],
	authors: [{ name: 'Benjamin Li' }],
	creator: 'Benjamin Li',
	openGraph: {
		title: 'Benjamin Li - Developer Website',
		description: 'Passionate about AI/ML for practical applications',
		url: 'https://benjaminli.net',
		siteName: 'Benjamin Li',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Benjamin Li',
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
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}

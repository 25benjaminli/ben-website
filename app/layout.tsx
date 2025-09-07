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
	title: 'Benjamin Li\'s Website',
	description:
		'Welcome to my website!',
	keywords: [
		'Software Developer',
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
		'Millburn',
		'New Jersey'
	],
	authors: [{ name: 'Benjamin Li' }],
	creator: 'Benjamin Li',
	openGraph: {
		title: 'Benjamin Li - Developer Website',
		description: 'Passionate about AI/ML for practical applications',
		url: 'https://your-domain.com',
		siteName: 'Benjamin Li\'s Website',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Benjamin Li\'s Website',
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

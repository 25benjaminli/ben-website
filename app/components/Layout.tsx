import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
	children: ReactNode;
	title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
	return (
		<div className="page-shell">
			<Navigation />
			<main className="page-content">
				{title && <h1 className="heading-page">{title}</h1>}
				{children}
			</main>
		</div>
	);
};

export default Layout;

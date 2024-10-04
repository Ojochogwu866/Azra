import React from 'react';

interface NavItem {
	label: string;
	href: string;
}

const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Events', href: '/events' },
	{ label: 'Giving', href: '/giving' },
	{ label: 'Find Us', href: '/find-us' },
];

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
	<a
		href={href}
		className="text-base font-medium uppercase transition-colors duration-200 hover:text-gray-300"
	>
		{children}
	</a>
);

const Header: React.FC = () => {
	return (
		<header className="flex w-full items-center justify-between bg-black px-6 py-4 text-white">
			<div className="flex-shrink-0">
				<img src="" alt="logo" className="h-8 w-auto" />
			</div>
			<nav>
				<ul className="flex space-x-10">
					{navItems.map((item) => (
						<li key={item.href}>
							<NavLink href={item.href}>{item.label}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;

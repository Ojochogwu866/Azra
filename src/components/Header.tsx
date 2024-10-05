import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

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
	delay?: number;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, delay = 0 }) => {
	const linkRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		gsap.from(linkRef.current, {
			y: -20,
			opacity: 1,
			duration: 0.5,
			delay,
			ease: 'power2.out',
		});
	}, [delay]);

	return (
		<a
			ref={linkRef}
			href={href}
			className="relative text-base font-medium uppercase transition-colors duration-200 hover:text-gray-300"
		>
			{children}
			<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
		</a>
	);
};

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.from(headerRef.current, {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out',
		});
	}, []);

	useEffect(() => {
		if (mobileMenuRef.current) {
			if (isMenuOpen) {
				gsap.to(mobileMenuRef.current, {
					height: 'auto',
					opacity: 0.2,
					duration: 0.3,
					ease: 'power2.inOut',
				});
			} else {
				gsap.to(mobileMenuRef.current, {
					height: 0,
					opacity: 0.2,
					duration: 0.3,
					ease: 'power2.inOut',
				});
			}
		}
	}, [isMenuOpen]);

	return (
		<header
			ref={headerRef}
			className="fixed top-0 z-50 w-full bg-black px-6 py-4 text-white"
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				<div className="flex-shrink-0">
					<img src="" alt="logo" className="h-8 w-auto" />
				</div>

				<nav className="hidden md:block">
					<ul className="flex space-x-10">
						{navItems.map((item, index) => (
							<li key={item.href} className="group">
								<NavLink href={item.href} delay={index * 0.1}>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<button
					className="md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			<div
				ref={mobileMenuRef}
				className="h-0 overflow-hidden opacity-0 md:hidden"
			>
				<nav className="mt-4">
					<ul className="space-y-4">
						{navItems.map((item, index) => (
							<li key={item.href} className="group">
								<NavLink href={item.href} delay={index * 0.1}>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

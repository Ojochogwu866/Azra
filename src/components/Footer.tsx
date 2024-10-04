import type { LucideIcon } from 'lucide-react';
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Youtube,
} from 'lucide-react';

interface ContactItem {
	icon: LucideIcon;
	content: string;
	href?: string;
}

interface SocialLink {
	icon: LucideIcon;
	href: string;
	label: string;
}

const contactItems: ContactItem[] = [
	{
		icon: Mail,
		content: 'info@thechurch.com',
		href: 'mailto:info@thechurch.com',
	},
	{
		icon: Phone,
		content: '123-456-7890',
		href: 'tel:+1234567890',
	},
	{
		icon: MapPin,
		content: '123 Church Street\nCity, State 12345',
	},
];

const socialLinks: SocialLink[] = [
	{ icon: Youtube, href: '#', label: 'YouTube' },
	{ icon: Facebook, href: '#', label: 'Facebook' },
	{ icon: Instagram, href: '#', label: 'Instagram' },
];

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
	<h3 className="text-lg font-semibold">{children}</h3>
);

const ContactList = ({ items }: { items: ContactItem[] }) => (
	<ul className="mt-4 space-y-4 text-sm">
		{items.map((item, index) => (
			<li key={index} className="flex items-start gap-2">
				<item.icon className="h-5 w-5 text-gray-400" />
				{item.href ? (
					<a className="text-gray-400 hover:text-white" href={item.href}>
						{item.content}
					</a>
				) : (
					<span className="whitespace-pre-line text-gray-400">
						{item.content}
					</span>
				)}
			</li>
		))}
	</ul>
);

const SocialLinks = ({ links }: { links: SocialLink[] }) => (
	<div className="mt-4 flex space-x-4">
		{links.map((link) => (
			<a
				key={link.label}
				href={link.href}
				className="text-gray-400 hover:text-white"
				aria-label={link.label}
			>
				<link.icon className="h-6 w-6" />
			</a>
		))}
	</div>
);

function Footer() {
	return (
		<footer className="relative z-10 bg-black text-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div>
						<FooterHeading>Contact Us</FooterHeading>
						<ContactList items={contactItems} />
					</div>
					<div>
						<FooterHeading>Follow Us</FooterHeading>
						<SocialLinks links={socialLinks} />
					</div>
					<div>
						<h3 className="text-2xl font-bold">The Church</h3>
						<p className="mt-2 text-sm text-gray-400">
							Behind you every step of the way
						</p>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-800 pt-8 text-center">
					<p className="text-sm text-gray-400">
						© {new Date().getFullYear()} The Church. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

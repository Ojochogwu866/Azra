import { Facebook, Instagram, Youtube } from 'lucide-react';
import Button from '../../components/Button';

function Socials() {
	const socialLinks = [
		{
			icon: Youtube,
			label: 'YouTube',
			url: '#',
			color: 'text-red-600',
		},
		{
			icon: Facebook,
			label: 'Facebook',
			url: '#',
			color: 'text-blue-600',
		},
		{
			icon: Instagram,
			label: 'Instagram',
			url: '#',
			color: 'text-pink-600',
		},
	];

	return (
		<div className="relative h-[400px] w-full">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1551054348-e34d8246c8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlsbHNvbmdzfGVufDB8fDB8fHww"
					alt="Community"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/80" />
			</div>
			<div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-start px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col space-y-8">
					<div>
						<h2 className="text-4xl font-bold text-white">Stay Connected</h2>
						<p className="mt-2 text-xl text-gray-200">
							Join our online community and never miss a moment
						</p>
					</div>
					<div className="flex gap-6">
						{socialLinks.map((social) => (
							<Button
								key={social.label}
								href={social.url}
								variant="secondary"
								className="flex items-center gap-2"
								colors={{
									secondary: {
										background: 'bg-transparent',
										text: 'text-white',
										border: 'border-gray-500',
										hoverBackground: 'bg-gray-600 bg-opacity-45',
										hoverText: 'text-white',
										hoverBorder: 'border-white',
									},
								}}
							>
								<social.icon className="h-5 w-5" />
								{social.label}
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Socials;

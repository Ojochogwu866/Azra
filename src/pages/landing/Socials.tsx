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
		<div className="relative flex min-h-[400px] w-full items-center">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1551054348-e34d8246c8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlsbHNvbmdzfGVufDB8fDB8fHww"
					alt="Community"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/80" />
			</div>
			<div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-start p-6 sm:px-6 lg:px-8">
				<div className="flex h-full flex-col space-y-6 md:space-y-8">
					<div>
						<h2 className="text-3xl font-bold text-white md:text-5xl">
							Stay Connected
						</h2>
						<p className="mt-2 text-lg text-gray-200 md:text-xl">
							Join our online community and never miss a moment
						</p>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
						{socialLinks.map((social) => (
							<Button
								key={social.label}
								variant="secondary"
								className="flex items-center justify-center gap-2"
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

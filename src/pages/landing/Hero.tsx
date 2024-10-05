import { useEffect, useState } from 'react';
import Button from '../../components/Button';
const bgImageUrl =
	'https://images.unsplash.com/photo-1639591361446-4f12433fb73c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhpbGxzb25nfGVufDB8fDB8fHww';

function Hero() {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = bgImageUrl;
		img.onload = () => setImageLoaded(true);
	}, []);

	if (!imageLoaded) {
		return (
			<div className="flex h-screen w-screen items-center justify-center bg-gray-200">
				Loading...
			</div>
		);
	}

	return (
		<div
			className="relative min-h-screen w-full bg-cover bg-center"
			style={{ backgroundImage: `url(${bgImageUrl})` }}
		>
			<div className="absolute inset-0 bg-black opacity-65"></div>
			<div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-start p-6 sm:px-6 lg:px-8">
				<div className="mt-40 flex flex-col space-y-6 text-left md:space-y-10">
					<p className="font-base text-gray-100">We want to see you here!</p>
					<h1 className="text-left text-4xl font-black uppercase text-white md:text-6xl">
						The Light Fellowship <br /> Salt & Light
					</h1>
					<Button
						className="max-w-[200px]"
						variant="secondary"
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
						Find Us!
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Hero;

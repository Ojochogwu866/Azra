import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

interface ImageSliceProps {
	imageUrl: string;
	altText: string;
	rotation: number;
	index: number;
}

const ImageSlice: React.FC<ImageSliceProps> = ({
	imageUrl,
	rotation,
	index,
}) => {
	const sliceRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={sliceRef}
			className="slice absolute left-0 top-0 h-full w-full origin-center overflow-hidden"
			data-index={index}
			style={{
				clipPath: 'polygon(50% 50%, 50% 50%, 100% 0, 100% 100%, 50% 100%)',
				transform: `rotate(${rotation}deg)`,
			}}
		>
			<div
				className="flex h-full w-auto bg-cover"
				style={{
					transform: `rotate(${-rotation}deg)`,
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
		</div>
	);
};

const CircularImagePie: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null); // Use specific type
	const images = [
		{
			url: 'https://images.unsplash.com/photo-1665397784544-a67a3f655ebe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhpbGxzb25nfGVufDB8fDB8fHww',
			alt: 'Image 1',
			rotation: 0,
		},
		{
			url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
			alt: 'Image 2',
			rotation: 120,
		},
		{
			url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
			alt: 'Image 3',
			rotation: 240,
		},
	];

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const slices = container.querySelectorAll('.slice');
		let currentRotation = 0;

		const animateSlices = () => {
			currentRotation += 120;

			const timeline = gsap.timeline({
				onComplete: () => {
					setTimeout(animateSlices, 3000);
				},
			});

			slices.forEach((slice: Element, index: number) => {
				timeline.to(
					slice,
					{
						rotate: `+=${120}`,
						duration: 1,
						ease: 'power2.inOut',
						delay: index * 0.2,
					},
					index * 0.2
				);
			});
		};

		const initialTimeout = setTimeout(animateSlices, 5000);

		return () => {
			clearTimeout(initialTimeout);
			gsap.killTweensOf(slices);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative flex h-[300px] w-[300px] gap-4 overflow-hidden rounded-full md:h-[500px] md:w-[500px]"
		>
			{images.map((image, index) => (
				<ImageSlice
					key={index}
					imageUrl={image.url}
					altText={image.alt}
					rotation={image.rotation}
					index={index}
				/>
			))}
			<div className="pointer-events-none absolute inset-0 rounded-full border-2 border-white" />
		</div>
	);
};

function Welcome() {
	return (
		<div className="welcome w-full bg-gray-100">
			<div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-8 p-6 md:flex-row md:gap-16 md:p-8">
				<div className="text-center md:text-left">
					<h2 className="text-4xl font-bold uppercase leading-tight md:text-5xl md:leading-[60px]">
						We can't
						<br /> wait to see <br /> you!
					</h2>
					<p className="mt-4 text-base font-normal leading-6 text-gray-700">
						We have a spot reserved for everyone in fellowship! <br /> Come
						Experience the presence of the Lord
					</p>
				</div>
				<div className="flex w-full items-center justify-center md:w-auto">
					<CircularImagePie />
				</div>
			</div>
		</div>
	);
}

export default Welcome;

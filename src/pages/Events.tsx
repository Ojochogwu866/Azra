import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

gsap.registerPlugin(ScrollTrigger);

const events = [
	{
		id: 1,
		title: 'Summer Youth Camp',
		date: 'July 15, 2024',
		image:
			'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww',
	},
	{
		id: 2,
		title: 'Easter Sunday Service',
		date: 'April 21, 2024',
		image:
			'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww',
	},
	{
		id: 3,
		title: 'Community Outreach',
		date: 'August 5, 2024',
		image:
			'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww',
	},
	{
		id: 4,
		title: 'Christmas Eve Service',
		date: 'December 24, 2024',
		image:
			'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww',
	},
	{
		id: 5,
		title: 'New Year Prayer Meeting',
		date: 'January 1, 2025',
		image:
			'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww',
	},
];

function Events() {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const scrollElement = scrollRef.current;
		if (scrollElement) {
			gsap.to(scrollElement, {
				x: () => -(scrollElement.scrollWidth - window.innerWidth),
				ease: 'none',
				scrollTrigger: {
					trigger: scrollElement,
					start: 'top top',
					end: () => `+=${scrollElement.scrollWidth - window.innerWidth}`,
					scrub: 1,
					pin: true,
					anticipatePin: 1,
				},
			});
		}
	}, []);

	const scroll = (direction: 'left' | 'right') => {
		const container = containerRef.current as HTMLDivElement;
		if (container) {
			const scrollAmount = direction === 'left' ? -300 : 300;
			container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	return (
		<div>
			<Header />

			<div className="relative mt-10 h-screen w-full">
				<img
					src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29yc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
					alt="Events Hero"
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50" />
				<div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-start px-4 sm:px-6 lg:px-8">
					<div className="mt-40 w-full max-w-4xl">
						<h1 className="mb-4 text-left text-4xl font-black uppercase text-white sm:text-5xl md:text-6xl">
							Upcoming Events
						</h1>
						<p className="text-left text-base text-gray-100 sm:text-lg">
							Join us for inspiring and uplifting gatherings that strengthen our
							faith and community.
						</p>
					</div>
				</div>
			</div>

			{/* Event Section */}
			<div className="bg-gray-100 py-10 sm:py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-8 flex items-center justify-between">
						<h2 className="text-xl font-bold sm:text-3xl">Upcoming Events</h2>
						<div className="flex space-x-4">
							<Button
								onClick={() => scroll('left')}
								className="w-[40px] sm:w-[200px]"
								variant="secondary"
								colors={{
									secondary: {
										background: 'bg-transparent',
										text: 'text-black',
										border: 'border-gray-500',
										hoverBackground: 'bg-gray-600 bg-opacity-45',
										hoverText: 'text-white',
										hoverBorder: 'border-white',
									},
								}}
							>
								<MoveLeft size={24} />
							</Button>
							<Button
								onClick={() => scroll('right')}
								className="w-[40px] sm:w-[200px]"
								variant="secondary"
								colors={{
									secondary: {
										background: 'bg-transparent',
										text: 'text-black',
										border: 'border-gray-500',
										hoverBackground: 'bg-gray-600 bg-opacity-45',
										hoverText: 'text-white',
										hoverBorder: 'border-white',
									},
								}}
							>
								<MoveRight size={36} />
							</Button>
						</div>
					</div>
					<div
						ref={containerRef}
						className="scrollbar-hide h-[300px] overflow-x-auto overflow-y-hidden"
					>
						<div ref={scrollRef} className="flex">
							{events.map((event) => (
								<div
									key={event.id}
									className="mr-4 w-[240px] flex-shrink-0 sm:mr-8 sm:w-80"
								>
									<div className="overflow-hidden bg-white shadow-sm">
										<img
											src={event.image}
											alt={event.title}
											className="h-40 w-full object-cover sm:h-48"
										/>
										<div className="p-4">
											<h3 className="mb-2 text-lg font-semibold sm:text-xl">
												{event.title}
											</h3>
											<p className="text-gray-600">{event.date}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Events;

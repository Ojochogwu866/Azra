import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import About from './About';
import Hero from './Hero';
import Join from './Join';
import Socials from './Socials';
import Welcome from './Welcome';

gsap.registerPlugin(ScrollTrigger);

function Index() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const heroRef = useRef<HTMLDivElement | null>(null);
	const heroWrapperRef = useRef<HTMLDivElement | null>(null);
	const welcomeRef = useRef<HTMLDivElement | null>(null);
	const joinRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		const hero = heroRef.current;
		const heroWrapper = heroWrapperRef.current;
		const welcome = welcomeRef.current;
		const join = joinRef.current;

		// Safely check if the elements exist before setting their properties
		if (hero && heroWrapper) {
			gsap.set(heroWrapper, { height: hero.offsetHeight });
			gsap.set(hero, {
				position: 'fixed',
				width: '100%',
				top: 0,
				left: 0,
				zIndex: 1,
			});

			gsap.to(welcome, {
				scrollTrigger: {
					trigger: welcome,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
				y: -hero.offsetHeight,
			});
		}

		if (join && container) {
			ScrollTrigger.create({
				trigger: join,
				start: 'top top',
				endTrigger: container,
				end: 'bottom bottom',
				pin: true,
				pinSpacing: false,
			});
		}

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div ref={containerRef}>
			<div ref={heroWrapperRef} className="relative">
				<div ref={heroRef}>
					<Hero />
				</div>
			</div>
			<div ref={welcomeRef} className="relative z-10">
				<Welcome />
			</div>
			<About />
			<div ref={joinRef} className="relative z-10">
				<Join />
			</div>
			<div className="relative z-10">
				<Socials />
				<Footer />
			</div>
		</div>
	);
}

export default Index;

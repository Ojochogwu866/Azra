import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

interface ColorScheme {
	background?: string;
	text?: string;
	border?: string;
	hoverBackground?: string;
	hoverText?: string;
	hoverBorder?: string;
}

interface ButtonProps {
	variant: 'primary' | 'secondary';
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	colors?: {
		primary?: ColorScheme;
		secondary?: ColorScheme;
	};
}

const defaultColors = {
	primary: {
		background: 'bg-white',
		text: 'text-white',
		hoverText: 'text-black',
		hoverBackground: 'bg-transparent',
		hoverBorder: '#1a1a1a',
	},
	secondary: {
		background: 'bg-transparent',
		text: 'text-white',
		border: 'border-black',
		hoverBackground: 'bg-gray-300',
		hoverText: 'text-black',
		hoverBorder: 'border-[#ffffff]',
	},
};

const Button: React.FC<ButtonProps> = ({
	variant,
	children,
	onClick,
	className = '',
	colors = defaultColors,
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const fillRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLSpanElement>(null);
	const colorScheme = {
		...defaultColors[variant],
		...(colors[variant] || {}),
	};

	useEffect(() => {
		if (!buttonRef.current || !fillRef.current || !textRef.current) return;
		const button = buttonRef.current;
		const fill = fillRef.current;
		const text = textRef.current;

		gsap.set(fill, { width: '0%', x: '-100%' });

		const enterTl = gsap.timeline({ paused: true });
		const leaveTl = gsap.timeline({ paused: true });

		enterTl
			.to(fill, {
				width: '100%',
				x: '0%',
				duration: 0.3,
				ease: 'power2.out',
			})
			.to(
				text,
				{
					color: colorScheme.hoverText,
					duration: 0.3,
				},
				0
			)
			.to(
				button,
				{
					borderColor: colorScheme.hoverBorder,
					duration: 0.3,
				},
				0
			);

		leaveTl
			.to(fill, {
				x: '100%',
				duration: 0.3,
				ease: 'power2.in',
			})
			.to(
				text,
				{
					color: colorScheme.text,
					duration: 0.3,
				},
				0
			)
			.to(
				button,
				{
					borderColor: colorScheme.border || 'initial',
					duration: 0.3,
				},
				0
			);

		const playEnterAnimation = () => {
			leaveTl.pause(0);
			enterTl.play(0);
		};

		const playLeaveAnimation = () => {
			enterTl.pause();
			leaveTl.play(0);
		};

		button.addEventListener('mouseenter', playEnterAnimation);
		button.addEventListener('mouseleave', playLeaveAnimation);

		return () => {
			button.removeEventListener('mouseenter', playEnterAnimation);
			button.removeEventListener('mouseleave', playLeaveAnimation);
		};
	}, [variant, colorScheme]);

	const baseStyles =
		'relative overflow-hidden px-6 py-3 transition-colors duration-300 ease-in-out';
	const variantStyles =
		variant === 'primary'
			? `${colorScheme.background} ${colorScheme.text} `
			: `${colorScheme.background} ${colorScheme.text} border-2 ${colorScheme.border}`;

	return (
		<button
			ref={buttonRef}
			className={`${baseStyles} ${variantStyles} ${className}`}
			onClick={onClick}
		>
			<div
				ref={fillRef}
				className={`absolute inset-0 ${colorScheme.hoverBackground}`}
				style={{
					width: '0%',
					transform: 'translateX(-100%)',
					left: 0,
					top: 0,
					bottom: 0,
				}}
			/>
			<span
				ref={textRef}
				className="relative z-10 flex items-center justify-center gap-2"
			>
				{children}
			</span>
		</button>
	);
};

export default Button;

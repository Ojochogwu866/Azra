import { Clock, MapPin, Users } from 'lucide-react';
import React from 'react';
import Button from '../../components/Button';

interface InfoCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
	<div className="flex flex-col items-center text-center">
		<div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
			{icon}
		</div>
		<h3 className="mb-1 text-lg font-semibold">{title}</h3>
		<p className="text-sm text-gray-600">{description}</p>
	</div>
);

function About() {
	return (
		<div className="relative z-10 mx-auto flex h-screen w-full max-w-7xl items-center justify-between">
			<div className="w-1/2 space-y-4 sm:px-6 lg:px-8">
				<p className="w-fit border-b-2 border-gray-800 text-xl font-medium tracking-widest">
					Join Us For Service
				</p>
				<p className="text-sm font-normal leading-6 text-gray-700">
					We would love to see you here! Find yourself in any of our weekly
					services, sunday morning worship or weekly service.
				</p>
				<h2 className="mt-10 text-3xl font-semibold uppercase text-black">
					The Church just by you
				</h2>
				<p>No 9, Remkom Road, off Arab Quaters, Abuja Nigeria</p>
				<Button
					variant="secondary"
					colors={{
						secondary: {
							background: 'bg-transparent',
							text: 'text-black',
							border: 'border-black',
							hoverBackground: 'bg-gray-800 bg-opacity-45',
							hoverText: 'text-black',
							hoverBorder: 'border-black',
						},
					}}
				>
					Locate Us!
				</Button>
			</div>
			<div className="flex h-screen w-1/2 items-center justify-center bg-[#f9f6f0e5] p-6">
				<div className="grid grid-cols-2 gap-10">
					<InfoCard
						icon={<Clock className="h-8 w-8 text-gray-700" />}
						title="Sunday Service"
						description="9:00 AM - 11:00 AM"
					/>
					<InfoCard
						icon={<Clock className="h-8 w-8 text-gray-700" />}
						title="Midweek Service"
						description="Wednesday, 6:00 PM - 7:30 PM"
					/>
					<InfoCard
						icon={<MapPin className="h-8 w-8 text-gray-700" />}
						title="Location"
						description="No 9, Remkom Road, off Arab Quaters, Abuja Nigeria"
					/>
					<InfoCard
						icon={<Users className="h-8 w-8 text-gray-700" />}
						title="Community"
						description="Join our vibrant community of believers"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;

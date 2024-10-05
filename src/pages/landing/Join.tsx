import { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/Modal';

interface ServiceUnit {
	id: number;
	name: string;
	description: string;
}

interface Group {
	id: number;
	name: string;
	meetingTime: string;
	location: string;
}

function Join() {
	const [serviceUnitModalOpen, setServiceUnitModalOpen] = useState(false);
	const [groupModalOpen, setGroupModalOpen] = useState(false);

	const serviceUnits: ServiceUnit[] = [
		{ id: 1, name: 'Choir', description: 'Worship through music and song.' },
		{
			id: 2,
			name: 'Ushering',
			description: 'Welcome and guide church attendees.',
		},
		{
			id: 3,
			name: 'Media',
			description: 'Handle audio/visual aspects of services.',
		},
	];

	const groups: Group[] = [
		{
			id: 1,
			name: 'Young Adults',
			meetingTime: 'Fridays at 7 PM',
			location: 'Main Hall',
		},
		{
			id: 2,
			name: 'Prayer Group',
			meetingTime: 'Wednesdays at 6 AM',
			location: 'Chapel',
		},
		{
			id: 3,
			name: 'Bible Study',
			meetingTime: 'Tuesdays at 7 PM',
			location: 'Room 201',
		},
	];

	return (
		<div className="join h-[400px] w-full bg-black">
			<div className="mx-auto flex h-full w-full max-w-7xl items-center justify-start px-4 sm:px-6 lg:px-8">
				<div className="flex h-full flex-col justify-center space-y-8">
					<div>
						<h2 className="text-3xl font-bold uppercase leading-[60px] text-gray-100 md:text-5xl">
							Find where you
							<br /> belong in church
						</h2>
					</div>
					<div className="flex flex-col md:flex-row gap-4">
						<Button
							className="w-[200px]"
							variant="secondary"
							onClick={() => setServiceUnitModalOpen(true)}
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
							Service Unit
						</Button>
						<Button
							className="w-[200px]"
							variant="secondary"
							onClick={() => setGroupModalOpen(true)}
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
							Groups
						</Button>
					</div>
				</div>
			</div>

			<Modal
				isOpen={serviceUnitModalOpen}
				onClose={() => setServiceUnitModalOpen(false)}
				title="Service Units"
			>
				<div className="space-y-4">
					{serviceUnits.map((unit) => (
						<div
							key={unit.id}
							className="rounded-lg border border-gray-200 p-4"
						>
							<h4 className="text-lg font-semibold">{unit.name}</h4>
							<p className="text-gray-600">{unit.description}</p>
						</div>
					))}
				</div>
			</Modal>

			<Modal
				isOpen={groupModalOpen}
				onClose={() => setGroupModalOpen(false)}
				title="Church Groups"
			>
				<div className="space-y-4">
					{groups.map((group) => (
						<div
							key={group.id}
							className="rounded-lg border border-gray-200 p-4"
						>
							<h4 className="text-lg font-semibold">{group.name}</h4>
							<p className="text-gray-600">{group.meetingTime}</p>
							<p className="text-gray-500">{group.location}</p>
						</div>
					))}
				</div>
			</Modal>
		</div>
	);
}

export default Join;

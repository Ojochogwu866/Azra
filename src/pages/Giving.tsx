import { CreditCard, Gift, Landmark } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';

function Giving() {
	const [givingType, setGivingType] = useState('tithe');
	const [paymentMethod, setPaymentMethod] = useState('bank');

	const bankDetails = {
		bankName: 'Example Bank',
		sortCode: '12-34-56',
		accountNumber: '12345678',
		accountName: 'The Church',
	};

	const onlineOptions = ['Flutterwave', 'Paystack', 'PayPal'];

	return (
		<div>
			<Header />
			<div className="w-full bg-gray-100 py-16">
				<div className="m:px-6 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:px-8">
					<div className="relative h-[640px]">
						<img
							src="https://plus.unsplash.com/premium_photo-1676488643764-d6cc247a259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNodXJjaCUyMGdpdmluZ3xlbnwwfHwwfHx8MA%3D%3D"
							alt="Giving"
							className="h-full w-full object-cover"
						/>
					</div>

					<div className="space-y-8">
						<h1 className="text-4xl font-bold">Give to The Church</h1>

						<div>
							<h2 className="mb-4 text-xl font-semibold">
								Choose a Giving Option
							</h2>

							<Tabs value={givingType} onValueChange={setGivingType}>
								<TabsList className="grid w-full grid-cols-2">
									<TabsTrigger value="tithe">Tithe & Offering</TabsTrigger>
									<TabsTrigger value="others">Others</TabsTrigger>
								</TabsList>

								<TabsContent
									value="tithe"
									className="mt-4 transition-opacity duration-300"
								>
									<p className="text-gray-600">
										Securely give your tithe or offering as a simple gift to
										support our ministry.
									</p>
								</TabsContent>

								<TabsContent
									value="others"
									className="mt-4 transition-opacity duration-300"
								>
									<p className="text-gray-600">
										Support other church initiatives and special projects.
									</p>
								</TabsContent>
							</Tabs>
						</div>

						<div>
							<h2 className="mb-4 text-xl font-semibold">
								Choose How You Want to Give
							</h2>

							<Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
								<TabsList className="grid w-full grid-cols-2">
									<TabsTrigger value="bank">
										<Landmark className="mr-2 h-4 w-4" />
										Bank Transfer
									</TabsTrigger>
									<TabsTrigger value="online">
										<CreditCard className="mr-2 h-4 w-4" />
										Online Giving
									</TabsTrigger>
								</TabsList>

								<TabsContent
									value="bank"
									className="mt-4 transition-opacity duration-300"
								>
									<div className="space-y-4 bg-white p-6">
										{Object.entries(bankDetails).map(([key, value]) => (
											<dl key={key}>
												<dt className="text-sm font-medium capitalize text-gray-500">
													{key.replace(/([A-Z])/g, ' $1').trim()}:
												</dt>
												<dd className="mt-1 text-sm text-gray-900">{value}</dd>
											</dl>
										))}
									</div>
								</TabsContent>

								<TabsContent
									value="online"
									className="mt-4 transition-opacity duration-300"
								>
									<div className="grid grid-cols-3 gap-4">
										{onlineOptions.map((option) => (
											<Button
												key={option}
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
												<Gift className="mr-2 h-5 w-5" />
												{option}
											</Button>
										))}
									</div>
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Giving;

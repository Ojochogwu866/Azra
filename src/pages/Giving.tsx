import { CreditCard, Gift, Landmark } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Modal } from '../components/Modal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/Tabs';
import PaymentForm from './PaymentForm';

function Giving() {
	const [givingType, setGivingType] = useState('tithe');
	const [paymentMethod, setPaymentMethod] = useState('bank');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

	const bankDetails = {
		bankName: 'Example Bank',
		sortCode: '12-34-56',
		accountNumber: '12345678',
		accountName: 'The Church',
	};

	const handlePaymentOptionClick = (option: string) => {
		setSelectedPaymentOption(option);
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
		setSelectedPaymentOption('');
	};

	return (
		<div>
			<Header />
			<div className="mt-10 w-full bg-gray-100 py-8 md:py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="relative order-1 h-[300px] md:order-none md:h-[640px]">
							<img
								src="https://plus.unsplash.com/premium_photo-1676488643764-d6cc247a259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNodXJjaCUyMGdpdmluZ3xlbnwwfHwwfHx8MA%3D%3D"
								alt="Giving"
								className="h-full w-full rounded-lg object-cover"
							/>
						</div>

						<div className="order-2 space-y-6 md:order-none md:space-y-8">
							<h1 className="text-3xl font-bold md:text-4xl">
								Give to The Church
							</h1>

							<div>
								<h2 className="mb-4 text-lg font-semibold md:text-xl">
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
										<p className="text-sm text-gray-600 md:text-base">
											Securely give your tithe or offering as a gift to support
											our ministry.
										</p>
									</TabsContent>

									<TabsContent
										value="others"
										className="mt-4 transition-opacity duration-300"
									>
										<p className="text-sm text-gray-600 md:text-base">
											Support other church initiatives and special projects.
										</p>
									</TabsContent>
								</Tabs>
							</div>

							<div>
								<h2 className="mb-4 text-lg font-semibold md:text-xl">
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
										<div className="space-y-4 rounded-lg bg-white p-4 md:p-6">
											{Object.entries(bankDetails).map(([key, value]) => (
												<dl key={key}>
													<dt className="text-sm font-medium capitalize text-gray-500">
														{key.replace(/([A-Z])/g, ' $1').trim()}:
													</dt>
													<dd className="mt-1 text-sm text-gray-900 md:text-base">
														{value}
													</dd>
												</dl>
											))}
										</div>
									</TabsContent>

									<TabsContent
										value="online"
										className="mt-4 transition-opacity duration-300"
									>
										<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
											{['Paystack', 'Flutterwave', 'PayPal'].map((option) => (
												<Button
													key={option}
													variant="secondary"
													onClick={() => handlePaymentOptionClick(option)}
													className="w-full justify-center"
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
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				title={`Give with ${selectedPaymentOption}`}
			>
				<PaymentForm
					selectedPaymentOption={selectedPaymentOption}
					onClose={handleModalClose}
				/>
			</Modal>

			<Footer />
		</div>
	);
}

export default Giving;

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';
import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { Input } from '../components/Input';

type PaystackReference = {
	reference: string;
	status: string;
};

interface PaymentFormProps {
	selectedPaymentOption: string;
	onClose: () => void;
}

function PaymentForm({ selectedPaymentOption, onClose }: PaymentFormProps) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [amount, setAmount] = useState('');

	const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';
	const flutterwavePublicKey =
		import.meta.env.VITE_flutterwave_PUBLIC_KEY || '';

	const config = {
		public_key: flutterwavePublicKey,
		tx_ref: Date.now().toString(),
		amount: Number(amount),
		currency: 'NGN',
		payment_options: 'card,mobilemoney,ussd',
		customer: {
			email,
			phone_number: phone,
			name,
		},
		customizations: {
			title: 'Gloryzone Bible Church',
			description: 'Church Payment',
			logo: 'https://yourchurch.com/logo.png',
		},
	};

	const handleFlutterwavePayment = useFlutterwave(config);

	const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (selectedPaymentOption === 'Flutterwave') {
			handleFlutterwavePayment({
				callback: (response) => {
					console.log(response);
					closePaymentModal();
					onClose();
				},
				onClose: () => onClose(),
			});
		}
	};

	const paystackConfig = {
		email,
		amount: Number(amount) * 100,
		publicKey: paystackPublicKey,
		text: 'Pay Now',
		onSuccess: (reference: PaystackReference) => {
			console.log(reference);
			onClose();
		},
		onClose: () => onClose(),
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setter: React.Dispatch<React.SetStateAction<string>>
	) => {
		setter(e.target.value);
	};

	return (
		<form onSubmit={handlePaymentSubmit} className="space-y-6">
			<Input
				label="Name"
				id="name"
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>

			<Input
				label="Email"
				id="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>

			<Input
				label="Phone"
				id="phone"
				type="tel"
				value={phone}
				onChange={(e) => handleInputChange(e, setPhone)}
				required
			/>

			<Input
				label="Amount"
				id="amount"
				type="number"
				value={amount}
				onChange={(e) => handleInputChange(e, setAmount)}
				required
			/>

			{selectedPaymentOption === 'Paystack' && (
				<PaystackButton
					{...paystackConfig}
					className="w-full bg-green-500 px-6 py-3 text-white"
				/>
			)}

			{selectedPaymentOption === 'Flutterwave' && (
				<button
					type="submit"
					className="w-full bg-orange-500 px-6 py-3 text-white"
				>
					Pay with Flutterwave
				</button>
			)}

			{selectedPaymentOption === 'PayPal' && (
				<PayPalScriptProvider
					options={{
						clientId: 'your-client-id',
						currency: 'USD',
					}}
				>
					<PayPalButtons
						createOrder={(_, actions) => {
							return actions.order?.create({
								intent: 'CAPTURE',
								purchase_units: [
									{
										amount: {
											currency_code: 'USD',
											value: amount,
										},
									},
								],
							});
						}}
						onApprove={(_, actions) => {
							if (!actions.order) {
								return Promise.reject(new Error('Order not found')); // Handle undefined case
							}

							return actions.order.capture().then(function (details) {
								const payerName =
									details?.payer?.name?.given_name ?? 'customer';
								console.log('Transaction completed by ' + payerName);
								onClose();
							});
						}}
					/>
				</PayPalScriptProvider>
			)}
		</form>
	);
}

export default PaymentForm;

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from './components/Header';
import Landing from './pages/landing';

function App() {
	const paypalOptions = {
		clientId: 'your_paypal_client_id',
	};

	return (
		<PayPalScriptProvider options={paypalOptions}>
			<div>
				<Header />
				<Landing />
			</div>
		</PayPalScriptProvider>
	);
}

export default App;

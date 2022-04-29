import ClientOnly from '../components/clientonly/clientonly';
import '../styles/globals.css';
import Header from '../components/Header/Header';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ClientOnly>
				<Header />
				<Component {...pageProps} />
			</ClientOnly>
		</>
	);
}

export default MyApp;

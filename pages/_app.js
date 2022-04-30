import ClientOnly from '../components/clientonly/clientonly';
import '../styles/globals.css';
import Header from '../components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<ClientOnly>
				<ToastContainer position="bottom-right" />
				<Header />
				<Component {...pageProps} />
			</ClientOnly>
		</>
	);
}

export default MyApp;

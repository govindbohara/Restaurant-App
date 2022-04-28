import ClientOnly from '../components/clientonly/clientonly';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ClientOnly>
				<Component {...pageProps} />
			</ClientOnly>
		</>
	);
}

export default MyApp;

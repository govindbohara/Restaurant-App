import { useState, useEffect } from 'react';

const ClientOnly = props => {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);
	if (isBrowser) {
		return props.children;
	}
	return null;
};
export default ClientOnly;

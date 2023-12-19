import { useEffect, useState } from 'react';
//usedevice
export const useDevice = () => {
	const [device, setDevice] = useState('desktop');
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				setDevice('desktop');
			} else if (window.innerWidth > 768 && window.innerWidth < 1023) {
				setDevice('tablet');
			} else if (window.innerWidth < 768) {
				setDevice('mobile');
			}
		};

		// Add event listener
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { device };
};

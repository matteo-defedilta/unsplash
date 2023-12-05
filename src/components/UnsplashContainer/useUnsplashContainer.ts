import { useEffect, useState } from 'react';
import { unsplashApi } from '../../axios/instance';

type UnsplashPhoto = {
	id: string;
	urls: {
		small: string;
	};
	alt_description?: string;
};

export const useUnsplashContainer = () => {
	const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
	const [query, setQuery] = useState('');

	const getPhotosFromUnsplash = async (signal: AbortSignal) => {
		try {
			const response = await unsplashApi.get('', {
				signal,
				params: {
					count: '10',
					query: query,
				},
			});
			const fetchedPhotos: UnsplashPhoto[] = response.data;
			setPhotos(fetchedPhotos);
		} catch (err) {
			console.error('Errore durante la richiesta API:', err);
		}
	};

	const handleSearch = (searchInput: string) => {
		console.log(searchInput);
		setQuery(searchInput);
	};

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		getPhotosFromUnsplash(signal);

		return () => {
			controller.abort();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return { photos, handleSearch };
};

import { useEffect, useState } from 'react';
import { unsplashApi } from '../../axios/instance';
import { useDebounce } from 'use-debounce';

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
	const [scroll, setScroll] = useState(0);
	const [debouncedValue] = useDebounce(scroll, 500);

	const getPhotosFromUnsplash = async (signal: AbortSignal) => {
		try {
			const response = await unsplashApi.get('', {
				signal,
				params: {
					count: 20,
					query: query,
				},
			});
			const fetchedPhotos: UnsplashPhoto[] = response.data;
			setPhotos((oldPhotos) => [...oldPhotos, ...fetchedPhotos]);
		} catch (err) {
			console.error('Errore durante la richiesta API:', err);
		}
	};

	const handleSearch = (searchInput: string) => {
		console.log(searchInput);
		setPhotos([]);
		setQuery(searchInput);
	};

	window.addEventListener('scroll', function () {
		const maxHeight = document.body.scrollHeight - window.innerHeight;
		const currentScroll = (window.pageYOffset * 100) / maxHeight;
		//if over 70% of scroll height, call unsplash
		if (currentScroll > 70) {
			console.log('oltre il 70%');
			setScroll((oldCount) => oldCount + 1);
		}
	});

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		if (debouncedValue === scroll) {
			getPhotosFromUnsplash(signal);
		}

		return () => {
			controller.abort();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query, debouncedValue]);

	return { photos, handleSearch };
};

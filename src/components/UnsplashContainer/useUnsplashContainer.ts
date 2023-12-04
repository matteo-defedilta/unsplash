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

	const getPhotosFromUnsplash = () => {
		unsplashApi
			.get('', {
				params: {
					count: '10',
					query: 'snow',
				},
			})
			.then((response) => {
				const fetchedPhotos: UnsplashPhoto[] = response.data;
				setPhotos(fetchedPhotos);
			})
			.catch((err) => console.error('Errore durante la richiesta API:', err));
	};

	useEffect(() => {
		getPhotosFromUnsplash();
	}, []);

	return { photos };
};

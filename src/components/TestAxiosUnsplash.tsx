import React, { useEffect, useState } from 'react';
import { unsplashApi } from '../axios/instance';

type UnsplashPhoto = {
	id: string;
	urls: {
		small: string;
	};
	alt_description?: string;
};

const TestAxiosUnsplash: React.FC = () => {
	const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);

	const getPhotosFromUnsplash = () => {
		unsplashApi
			.get('https://api.unsplash.com/photos/random', {
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

	return (
		<div>
			<h1>Foto da Unsplash</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{photos.map((photo) => (
					<div key={photo.id} style={{ margin: '10px' }}>
						<img
							src={photo.urls.small}
							alt={photo.alt_description || 'Unsplash Photo'}
							style={{ width: '200px', height: '200px', objectFit: 'cover' }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default TestAxiosUnsplash;

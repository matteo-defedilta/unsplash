export type UnsplashPhoto = {
	id: string;
	urls: {
		small: string;
		full: string;
	};
	links: {
		download: string;
	};
	alt_description?: string;
};

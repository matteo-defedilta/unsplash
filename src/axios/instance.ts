import axios from 'axios';

export const unsplashApi = axios.create({
	baseURL: 'https://api.unsplash.com/photos/random',
	headers: {
		Authorization: 'Client-ID wd3ez-ukKqwBJi2kBORDIWDQqHMr1UKPnNN8Au6iQog',
	},
});

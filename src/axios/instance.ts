import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
//const API_KEY = process.env.VITE_API_KEY;

export const unsplashApi = axios.create({
	baseURL: 'https://api.unsplash.com/photos/random',
	headers: {
		Authorization: `Client-ID ${API_KEY}`,
	},
});

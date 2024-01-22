import { Header, ImageList } from '../../components';
import { useUnsplashContainer } from './useUnsplashContainer';

export const UnsplashContainer = () => {
	const { photos, handleSearch, params } = useUnsplashContainer();
	return (
		<div>
			<Header search={handleSearch} params={params} />
			<ImageList photos={photos} />
		</div>
	);
};

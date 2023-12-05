import { Header, ImageList } from '../../components';
import { useUnsplashContainer } from './useUnsplashContainer';

export const UnsplashContainer = () => {
	const { photos, handleSearch } = useUnsplashContainer();
	return (
		<div>
			<Header search={handleSearch} />
			<ImageList photos={photos} />
		</div>
	);
};

import { Header, ImageList } from '../../components';
import { useUnsplashContainer } from './useUnsplashContainer';

export const UnsplashContainer = () => {
	const { photos } = useUnsplashContainer();
	return (
		<div>
			<Header />
			<ImageList photos={photos} />
		</div>
	);
};

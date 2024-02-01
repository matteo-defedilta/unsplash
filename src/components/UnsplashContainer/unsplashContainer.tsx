import { ThemeProvider } from 'styled-components';
import { Header, ImageList } from '../../components';
import { useUnsplashContainer } from './useUnsplashContainer';
import { useColors } from '../../assets/colors';

export const UnsplashContainer = () => {
	const { photos, handleSearch, params } = useUnsplashContainer();
	const colors = useColors();

	return (
		<ThemeProvider theme={colors}>
			<div style={{ background: colors.mainBackground }}>
				<Header search={handleSearch} params={params} />
				<ImageList photos={photos} />
			</div>
		</ThemeProvider>
	);
};

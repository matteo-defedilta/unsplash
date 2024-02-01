import { UnsplashSVG } from '../../assets/Svgs';
import * as S from './header.style';
import { useHeader } from './useHeader';

import { useThemeContext } from '../../context/ThemeContext';

type HeaderProps = {
	search: (searchInput: string) => void;
	params: string | null;
};

export const Header: React.FC<HeaderProps> = ({ search, params }) => {
	const { searchInput, handleSearchImage } = useHeader(search, params);
	const { setDarkTheme } = useThemeContext();

	return (
		<>
			<S.StyledHeader>
				<UnsplashSVG />
				<S.StyledTitle>Unsplash</S.StyledTitle>
				<S.StyledImageSearch
					value={searchInput}
					onChange={(e) => handleSearchImage(e)}
					type='text'
					placeholder='cerca immagine'
				/>
				<S.StyledThemeButton onClick={() => setDarkTheme((theme) => !theme)}>
					Change theme
				</S.StyledThemeButton>
			</S.StyledHeader>
		</>
	);
};

import { UnsplashSVG } from '../../assets/Svgs';
import * as S from './header.style';
import { useHeader } from './useHeader';

type HeaderProps = {
	search: (searchInput: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ search }) => {
	const { searchInput, handleSearchImage } = useHeader(search);

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
			</S.StyledHeader>
		</>
	);
};

import { UnsplashSVG } from '../../assets/Svgs';
import * as S from './header.style';
import { useState } from 'react';

export const Header = () => {
	const [searchInput, setsearchInput] = useState('');

	return (
		<>
			<S.StyledHeader>
				<UnsplashSVG />
				<S.StyledTitle>Unsplash</S.StyledTitle>
				<S.StyledImageSearch
					value={searchInput}
					onChange={(e) => setsearchInput(e.target.value)}
					type='text'
					placeholder='cerca immagine'
				/>
			</S.StyledHeader>
		</>
	);
};

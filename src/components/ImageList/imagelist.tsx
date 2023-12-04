import { useImageList } from './useImageList';
import * as S from './imagelist.style';

export const ImageList = () => {
	const { photos } = useImageList();

	return photos.length !== 0 ? (
		<div>
			<S.ImageListWrapper>
				{photos.map((photo) => (
					<S.ImageListContainer key={photo.id}>
						<S.Image
							src={photo.urls.small}
							alt={photo.alt_description || 'Unsplash Photo'}
						/>
					</S.ImageListContainer>
				))}
			</S.ImageListWrapper>
		</div>
	) : (
		<p>loading</p>
	);
};

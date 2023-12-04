import * as S from './imagelist.style';

type UnsplashPhoto = {
	id: string;
	urls: {
		small: string;
	};
	alt_description?: string;
};

type ImageListProps = {
	photos: Array<UnsplashPhoto>;
};

export const ImageList: React.FC<ImageListProps> = ({ photos }) => {
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

import * as S from './imagelist.style';
import { useDevice } from '../../utilities/useDevice';
import { useMemo } from 'react';

import { Download } from './../../assets/Svgs/download';

type UnsplashPhoto = {
	id: string;
	urls: {
		small: string;
		full: string;
	};
	links: {
		download: string;
	};
	alt_description?: string;
};

type ImageListProps = {
	photos: Array<UnsplashPhoto>;
};

export const ImageList: React.FC<ImageListProps> = ({ photos }) => {
	const { device } = useDevice();

	const columns = useMemo(() => {
		if (device === 'desktop') {
			return 3;
		} else if (device === 'tablet') {
			return 2;
		} else {
			return 1;
		}
	}, [device]);

	const downloadImage = (url: string) => {
		fetch(url)
			.then((res) => res.blob())
			.then((blob) => {
				const file = new File([blob], 'image', { type: blob.type });
				const fileId = url.split('-')[1];
				downloadFile(file, fileId);
			});

		const downloadFile = (file: Blob, fileId: string) => {
			const fr = new FileReader();
			fr.readAsDataURL(file);
			fr.addEventListener('load', () => {
				const aTag = document.createElement('a');
				const downlodableImage = fr.result as string;
				aTag.href = downlodableImage;
				aTag.setAttribute('download', fileId);
				document.body.appendChild(aTag);
				aTag.click();
				aTag.remove();
			});
		};
	};

	return photos.length !== 0 ? (
		<>
			<S.ImageListWrapper className={`columns-${device}`}>
				{Array.from({ length: columns }).map((_, columnIndex) => (
					<S.ImageListContainer key={columnIndex} className='column'>
						{photos.map((photo, photoIndex) => {
							if (photoIndex % columns === columnIndex) {
								return (
									<S.ImageContainer>
										<S.Image
											key={photo.id}
											src={photo.urls.small}
											alt={photo.alt_description}
										/>
										<S.ImageUrl
											onClick={() => {
												downloadImage(photo.urls.full);
											}}
										>
											<Download />
										</S.ImageUrl>
									</S.ImageContainer>
								);
							}
							return null;
						})}
					</S.ImageListContainer>
				))}
			</S.ImageListWrapper>
		</>
	) : (
		<>
			{device}
			<p>loading</p>
		</>
	);
};

import styled from 'styled-components';

export const ImageListWrapper = styled.div`
	display: grid;
	grid-template-columns: ${(props) => {
		if (props.className === 'columns-desktop') {
			return 'repeat(3, 1fr)';
		} else if (props.className === 'columns-tablet') {
			return 'repeat(2, 1fr)';
		} else {
			return 'repeat(1, 1fr)';
		}
	}};
	gap: 10px;
	margin: 1.25rem 6rem;

	@media (max-width: 768px) {
		margin: 1rem;
	}
`;

export const ImageListContainer = styled.div`
	text-align: center;
`;

export const ImageUrl = styled.button`
	position: absolute;
	bottom: 10px;
	right: 10px;
	margin: 8px;
	color: white;
	text-decoration: none;
	border: none;
	display: none;
	cursor: pointer;
`;

export const ImageContainer = styled.div`
	position: relative;
	display: block;
	overflow: hidden;
	border-radius: 20px;

	&:hover {
		${ImageUrl} {
			display: block;
		}
	}
`;

export const Image = styled.img`
	border-radius: 20px;
	margin: 5px 0;
	width: 100%;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.05);
	}
`;

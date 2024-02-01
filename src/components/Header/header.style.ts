import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.navbarBackground};
	color: ${(props) => props.theme.borderColor};
	padding: 0rem 6rem;
	gap: 1rem;
`;

export const StyledTitle = styled.h1`
	color: ${(props) => props.theme.borderColor};
`;

export const StyledImageSearch = styled.input`
	background-color: ${(props) => props.theme.buttonBackground};
	width: 100%;
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 20px;
	color: ${(props) => props.theme.borderColor};
	font-size: 1rem;
	padding: 0.75rem;
`;

export const StyledThemeButton = styled.button`
	padding: 0.75rem;
	margin: 0;
	cursor: pointer;
	background-color: ${(props) => props.theme.buttonBackground};
	border-color: ${(props) => props.theme.borderColor};
	border-radius: 20px;
	min-width: 150px;
`;

import { useThemeContext } from '../context/ThemeContext';

export const useColors = () => {
	const { darkTheme } = useThemeContext();

	const colors = {
		mainBackground: darkTheme ? '#11181c' : '#eee',
		borderColor: darkTheme ? '#687781' : '#141C22',
		navbarBackground: darkTheme ? '#141c22' : '#fff',
		buttonBackground: darkTheme ? '#172027' : '#eee',
	};

	return colors;
};

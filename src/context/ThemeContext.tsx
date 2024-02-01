import { ReactNode, createContext, useContext, useState } from 'react';

type ThemeContextType = {
	darkTheme: boolean;
	setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

type ThemeProviderType = {
	children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProviderReact = ({ children }: ThemeProviderType) => {
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('Outside context Ptovider');
	}
	return context;
};

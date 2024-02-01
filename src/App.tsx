import { UnsplashContainer } from './components';
import { ThemeProviderReact } from './context/ThemeContext';

function App() {
	return (
		<>
			<ThemeProviderReact>
				<UnsplashContainer />
			</ThemeProviderReact>
		</>
	);
}

export default App;

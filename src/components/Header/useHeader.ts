import { useDebounce } from 'use-debounce';
import { ChangeEvent, useEffect, useState } from 'react';

export const useHeader = (
	search: (searchInput: string) => void,
	params: string | null
) => {
	const [searchInput, setsearchInput] = useState(
		params != undefined ? params : ''
	);
	const [debouncedValue] = useDebounce(searchInput, 500);

	const handleSearchImage = (e: ChangeEvent<HTMLInputElement>) => {
		setsearchInput(e.target.value);
	};

	useEffect(() => {
		if (debouncedValue != '') {
			search(debouncedValue);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	return {
		searchInput,
		handleSearchImage,
	};
};

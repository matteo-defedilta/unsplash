import { useState, useEffect } from 'react';

const useQueryParam = (paramName: string) => {
	const getQueryParamValue = () => {
		const queryParams = new URLSearchParams(window.location.search);
		return queryParams.get(paramName);
	};

	const [params, setQueryParams] = useState<string | null>(
		getQueryParamValue()
	);

	useEffect(() => {
		const updatedParams = new URLSearchParams(window.location.search);
		if (params !== null) {
			updatedParams.set(paramName, params);
		} else {
			updatedParams.delete(paramName);
		}

		let newUrl = `${window.location.pathname}`;
		if (updatedParams.toString() != '') {
			newUrl += `?${updatedParams.toString()}`;
		}
		window.history.replaceState({}, '', newUrl);
	}, [paramName, params]);

	return {
		params,
		setQueryParams,
	};
};

export default useQueryParam;

import React from 'react';

const Loader = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
		>
			<circle
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
				class="opacity-25"
			></circle>{' '}
			<path
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				class="opacity-75"
			></path>
		</svg>
	);
};

export default Loader;

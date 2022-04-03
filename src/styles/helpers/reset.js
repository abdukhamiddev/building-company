import { css } from "styled-components";

export const reset = css`
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	html {
		margin-right: calc(-1 * (100vw - 100%));
		overflow-x: hidden;
	}
	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	picture,
	figure,
	blockquote,
	figure,
	blockquote,
	dl,
	dd {
		margin: 0;
	}
	// Define line-height for headings in this project
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: var(--line-height-headings);
	}
	// Define default font-size
	p {
		font-size: var(--fs-text-large);
	}
	/* Remove list styles on ul, ol elements with a list role,
 which suggests default styling will be removed */
	ul[role="list"],
	ul,
	ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	/* Set core body defaults */
	body {
		font-family: var(--font);
		line-height: var(--line-height-text);
		background-color: var(--clr-light);
		color: var(--clr-dark);
	}
	/* A elements that don't have a class get default styles */
	a {
		text-decoration: none;
	}
	/* Make images easier to work with */
	img,
	picture {
		max-width: 100%;
		display: block;
		height: auto;
	}
	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
`;

/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'

export const globalStyles = (
	<Global
		styles={css`
			html {
				/* background colors */
				--color-background-blue: #1ca0eb;
				--color-background-black: #464646;
				--background-card: #efedfe;

				/* colors */
				--primary: #3747c4;
				--dark:  #252a40;
				--light: #888e9f;
				--white: #ffffff;
				--sidebar-border: #f1f3f7;
				--water-mark: #e5e2fc;

				/* radius */
				--radius: 10px;


			/* Box sizing rules */
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			/* Remove default margin */
			body,
			h1,
			h2,
			h3,
			h4,
			p,
			figure,
			blockquote,
			dl,
			dd {
				margin: 0;
			}

			/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
			ul[role='list'],
			ol[role='list'] {
				list-style: none;
			}

			/* Set core root defaults */
			html:focus-within {
				scroll-behavior: smooth;
			}

			/* Set core body defaults */
			body {
				min-height: 100vh;
				text-rendering: optimizeSpeed;
				line-height: 1.6;
			}

			/* A elements that don't have a class get default styles */
			a:not([class]) {
				text-decoration-skip-ink: auto;
			}

			/* Make images easier to work with */
			img,
			picture {
				max-width: 100%;
				display: block;
			}

			/* Inherit fonts for inputs and buttons */
			input,
			button,
			textarea,
			select {
				font: inherit;
			}

			input,button, textarea{
				:focus {
					outline: 2px solid #d3d2f0;
				}
			}
		`}
	/>
)

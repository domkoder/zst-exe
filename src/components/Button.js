/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

function Button({ className, children, onOpen }) {
	return (
		<button onClick={onOpen} className={className} css={styles}>
			{children}
		</button>
	)
}
const styles = css`
	border: none;
	color: var(--white);
	background: var(--primary);
	border-radius: var(--radius);
	display: block;
	cursor: pointer;
	font-size: 13px;
	padding: 0.5rem 1rem;
	box-shadow: 4px 4px 4px rgb(0 0 0 / 10%);
`

// const Button = styled.button`

// `

export default Button

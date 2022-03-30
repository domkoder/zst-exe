/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'

function Logo() {
	return (
		<div css={container}>
			<span css={logoIcon}>Z</span>
			<span css={logoText}>Zst</span>
		</div>
	)
}

const container = css`
	display: flex;
	align-items: center;
`
const logoIcon = css`
	height: 40px;
	width: 40px;
	font-size: 20px;
	font-weight: bold;
	color: white;
	background-color: var(--primary);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--radius);
	margin-right: 10px;
`
const logoText = css`
	font-weight: bold;
	font-size: 20px;
	color: var(--dark);
`
export default Logo

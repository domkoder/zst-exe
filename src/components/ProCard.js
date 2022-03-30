/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Button from './Button'

function ProCard() {
	return (
		<div css={card}>
			<span css={waterMark}>R</span>
			<div css={container}>
				<Heading>Upgrade to pro</Heading>
				<Paragraph>Make the most out of Zst with pro</Paragraph>
				<Button css={buttonStyles}>Upgrade</Button>
			</div>
		</div>
	)
}

const card = css`
	background-color: var(--background-card);
	border-radius: var(--radius);
	margin: 1rem;
	height: 230px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
`

const container = css`
	grid-row: 1/-1;
	grid-column: 1/-1;
	justify-self: center;
	align-self: end;
	padding: 2rem;
`

const waterMark = css`
	font-size: 200px;
	font-weight: bold;
	color: #e5e2fc;
	grid-row: 1/-1;
	grid-column: 1/-1;
	justify-self: center;
`
const Heading = styled.h3`
	font-size: 12px;
	text-align: center;
	color: var(--primary);
	margin-bottom: 0.5rem;
`
const Paragraph = styled.p`
	font-size: 11px;
	text-align: center;
	color: var(--primary);
	margin-bottom: 1rem;
	font-weight: bold;
`
const buttonStyles = css`
	margin: auto;
`
export default ProCard

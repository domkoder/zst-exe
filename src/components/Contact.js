/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

function Contact({ contact }) {
	const { name, phone } = contact
	return (
		<Container>
			<IconContainer>
				<FaPhoneAlt css={icon} />
			</IconContainer>
			<div>
				<Title>{name}</Title>
				<Subtitle>{phone}</Subtitle>
			</div>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	font-size: 15px;

	@media only screen and (max-width: 850px) {
		display: none;
	}
`

const IconContainer = styled.span`
	height: 50px;
	width: 50px;
	background-color: var(--background-card);
	border-radius: 30px;
	display: grid;
	place-items: center;
	margin-right: 1rem;
`

const Title = styled.p`
	color: #5e626e;
`
const Subtitle = styled.p`
	color: var(--light);
`

const icon = css`
	color: var(--primary);
`
export default Contact

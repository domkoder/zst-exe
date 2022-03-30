/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import styled from '@emotion/styled'
import { FaMapMarkerAlt, FaCompactDisc, FaHeart } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'

import Contact from './Contact'
import Slider from './Slider'
import Button from './Button'
import ContactModal from './ContactModal'

function Card({ listing, onLike }) {
	const [showDialog, setShowDialog] = React.useState(false)
	const open = () => setShowDialog(true)
	const close = () => setShowDialog(false) // const [rating, setRating] = React.useState()
	const { id, name, description, location, contact, rating, liked, images } =
		listing

	return (
		<>
			<Container>
				<Slider images={images} />
				<div css={infoContainer}>
					<div css={titleContainer}>
						<h4 css={heading}>{name}</h4>
						<StarRatings
							rating={rating}
							starRatedColor="#f7bc32"
							starHoverColor=""
							numberOfStars={5}
							name="rating"
							starDimension="20px"
							starSpacing="1px"
						/>
					</div>
					<p css={paragraph}>
						<FaMapMarkerAlt css={icon} />
						{location}
					</p>
					<p css={paragraph}>
						<FaCompactDisc css={icon} />
						{description}
					</p>
					<div css={contactContainer}>
						<Contact contact={contact} />
						<Button onOpen={open}>Contact Agent</Button>
					</div>
				</div>

				<Like css={liked ? colorRed : null} onClick={() => onLike(id)} />
			</Container>
			<ContactModal showDialog={showDialog} close={close} name={name} />
		</>
	)
}

const Container = styled.div`
	border-radius: var(--radius);
	background-color: var(--white);
	padding: 1.5rem;
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: 300px 1fr;
	position: relative;
	box-shadow: 4px 4px 4px rgb(0 0 0 / 10%);

	:hover {
		outline: 3px solid #d3d2f0;
		border: 2px solid var(--primary);
	}

	@media only screen and (max-width: 850px) {
		grid-template-columns: 1fr;
	}

	@media only screen and (max-width: 500px) {
		padding: 1rem;
	}
`
const infoContainer = css`
	display: block;
	text-decoration: none;
	margin-left: 1.5rem;
	@media only screen and (max-width: 850px) {
		margin-left: 0;
		margin-top: 1rem;
	}
`

const titleContainer = css`
	display: flex;
	align-items: center;

	@media only screen and (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
	}
`

const heading = css`
	color: var(--dark);
	margin-right: 1rem;
`

const paragraph = css`
	color: var(--light);
	margin-right: 1rem;
	display: flex;
	align-items: center;
	font-size: 15px;
	align-items: flex-start;
	margin-bottom: 0.4rem;
`
const icon = css`
	flex-shrink: 0;
	font-size: 12px;
	margin-right: 0.5rem;
	margin-top: 5px;
`
const contactContainer = css`
	display: flex;
	align-items: center;
	margin-top: 2rem;
	justify-content: space-between;
	${
		'' /* @media only screen and (max-width: 850px) {
		flex-direction: column;
		align-items: flex-start;
		margin-top: 0rem;
	} */
	}
`

const Like = styled(FaHeart)`
	margin: ;
	font-size: 30px;
	color: var(--background-card);
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	cursor: pointer;
	@media only screen and (max-width: 850px) {
		top: 2rem;
		right: 2rem;
	}
`

const colorRed = css`
	color: red;
`

export default Card

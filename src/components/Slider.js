/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Slider({ images }) {
	const [slideIndex, setSlideIndex] = React.useState(1)

	const nextSlide = () => {
		if (slideIndex !== images.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === images.length) {
			setSlideIndex(1)
		}
	}

	const previousSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(images.length)
		}
	}

	return (
		<Container>
			{images.map((image, index) => (
				<Slide
					css={slideIndex === index + 1 ? activeAnim : null}
					key={image + index}
				>
					<SlideImage src={`/assets/${image}`} alt="" />
				</Slide>
			))}

			<ButtonSlider css={next} onClick={nextSlide}>
				<FaChevronRight />
			</ButtonSlider>

			<ButtonSlider css={previous} onClick={previousSlide}>
				<FaChevronLeft />
			</ButtonSlider>

			<Indicators>
				{images.map((image, index) => (
					<Indicator
						key={image + index}
						css={slideIndex === index + 1 ? activeIndicator : null}
						onClick={() => setSlideIndex(index + 1)}
					/>
				))}
			</Indicators>
		</Container>
	)
}

const Container = styled.div`
	height: 200px;
	position: relative;
	overflow: hidden;
	border-radius: var(--radius);
	@media only screen and (max-width: 850px) {
		height: 250px;
	}

	@media only screen and (max-width: 500px) {
		height: 200px;
	}
`
const Slide = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	opacity: 0;
	transition: opacity ease-in-out 0.4s;
`
const SlideImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const activeAnim = css`
	opacity: 1;
`
const ButtonSlider = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background: var(--background-card);
	border: none;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	outline: none;
	${'' /* margin: 0.2rem; */}
	outline: 0 !important;
`

const previous = css`
	top: 50%;
	left: 20px;
	transform: translateY(-60%);
`
const next = css`
	top: 50%;
	right: 20px;
	transform: translateY(-60%);
`

const Indicators = styled.div`
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
`

const Indicator = styled.span`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	border: 1px solid var(--background-card);
	margin: 0 5px;
	background: var(--background-card);
`

const activeIndicator = css`
	background: var(--primary);
`

export default Slider

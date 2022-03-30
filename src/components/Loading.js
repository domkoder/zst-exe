import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { FaSpinner } from 'react-icons/fa'

function Loading() {
	return (
		<Container>
			<Spinner />
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	background-color: var(--light;);
	display: grid;
	place-items: center;
`

const spine = keyframes`
  0%{ transform: rotate(0deg);}
  100%{ transform: rotate(360deg);}
`

const Spinner = styled(FaSpinner)`
	animation: ${spine} 1s linear infinite;
	font-size: 50px;
`
export default Loading

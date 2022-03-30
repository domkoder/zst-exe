import React from 'react'
import styled from '@emotion/styled'
import Sidebar from './Sidebar'
import Main from './Main'

import { globalStyles } from '../globals'

function Dashboard() {
	const [click, setClick] = React.useState(false)

	const handleClick = () => setClick(!click)
	return (
		<>
			{globalStyles}
			<Container>
				<Sidebar click={click} handleClick={handleClick} />
				<Main handleClick={handleClick} />
			</Container>
		</>
	)
}

const Container = styled.div`
	display: grid;
	height: 100vh;
	max-width: 1440px;
	margin: auto;
	grid-template-columns: 220px 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: 'sidebar main main main main';

	@media only screen and (max-width: 1100px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'main';
	} ;
`

export default Dashboard

import React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Listings from './Listings'
import SearchForm from './SearchForm'
import { FaBars } from 'react-icons/fa'

function Main({ handleClick }) {
	const [searchQuery, setSearchQuery] = React.useState('')

	const handleSearch = (query) => {
		setSearchQuery(query)
	}

	return (
		<Container>
			<MenuIcon onClick={handleClick} />

			<SearchForm value={searchQuery} onChange={handleSearch} />
			<Header />
			<Listings searchQuery={searchQuery} />
		</Container>
	)
}
const Container = styled.main`
	grid-area: main;
	background-color: #f6f8fc;
	padding: 2rem 2.5rem;
	overflow-y: auto;
	height: 100vh;

	/* width */
	::-webkit-scrollbar {
		width: 7px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		${'' /* border-radius: 10px; */}
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--primary);
		${'' /* border-radius: 10px; */}
	}

	@media only screen and (max-width: 500px) {
		padding: 1rem;
	}
`
const MenuIcon = styled(FaBars)`
	font-size: 30px;
	color: var(--light);
	margin-bottom: 1rem;
	cursor: pointer;
	display: none;
	@media only screen and (max-width: 1100px) {
		display: block;
	} ;
`
export default Main

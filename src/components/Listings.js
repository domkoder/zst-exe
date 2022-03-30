import React from 'react'
import styled from '@emotion/styled'
import Card from './Card'

const initialListings = [
	{
		id: 1,
		name: '5 bedroom flat in jos',
		location: '21, Prince Adelowo Adedeji Street',
		description: 'Beautiful terrace located in a serene environment',
		rating: 2,
		liked: true,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: ['home1.jpg', 'home2.jpg', 'home3.jpg', 'home2.jpg', 'home5.jpg'],
	},

	{
		id: 2,
		name: '3 Bathrooms Terraced duplex',
		location: '26, Prince Adelowo Adedeji Street',
		description:
			'This is a brand new 3 bedroom apartment on the ground floor of a 1 story building.',
		rating: 1,
		liked: false,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},

		images: ['home2.jpg', 'home3.jpg', 'home4.jpg', 'home5.jpg', 'home1.jpg'],
	},

	{
		id: 3,
		name: 'Executive 2 Bedroom Flat',
		location: '26, Prince Adelowo Adedeji Street',
		description:
			'Executive 2 bedroom flat duplex available in a good estate with tarred road ',
		rating: 5,
		liked: false,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: ['home3.jpg', 'home4.jpg', 'home5.jpg', 'home1.jpg', 'home2.jpg'],
	},

	{
		id: 4,
		name: '5 bedroom Duplex in Ajah',
		location: '26, Prince Adelowo Adedeji Street',
		description: 'Beautiful terrace located in a serene environment',
		rating: 2.5,
		liked: false,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: ['home4.jpg', 'home5.jpg', 'home1.jpg', 'home2.jpg', 'home3.jpg'],
	},

	{
		id: 5,
		name: '3 bedroom duplex in Lekki.',
		location: 'Lekki, Lagos, Nigeria',
		description:
			'To let at ikate, lekki* serviced 3 bedroom duplex with swimming pool at ikate.',
		rating: 2,
		liked: true,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: ['home5.jpg', 'home1.jpg', 'home2.jpg', 'home3.jpg', 'home4.jpg'],
	},

	{
		id: 6,
		name: '5 bedroom Duplex in Ajah',
		location: '26, Prince Adelowo Adedeji Street',
		description: 'Beautiful terrace located in a serene environment',
		rating: 1.5,
		liked: true,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: [
			'home6.jpg',
			'home7.jpg',
			'home8.jpg',
			'home9.jpeg',
			'home10.jpeg',
		],
	},

	{
		id: 7,
		name: '5 bedroom Duplex in Ajah',
		location: '26, Prince Adelowo Adedeji Street',
		description: 'Beautiful terrace located in a serene environment',
		rating: 4,
		liked: false,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: [
			'home7.jpg',
			'home8.jpg',
			'home9.jpeg',
			'home10.jpeg',
			'home6.jpg',
		],
	},

	{
		id: 8,
		name: '5 bedroom Duplex in Ajah',
		location: '26, Prince Adelowo Adedeji Street',
		description: 'Beautiful terrace located in a serene environment',
		rating: 1.5,
		liked: false,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: [
			'home8.jpg',
			'home9.jpeg',
			'home10.jpeg',
			'home6.jpg',
			'home7.jpg',
		],
	},

	{
		id: 9,
		name: '5 bedroom Duplex in Ajah',
		location: '26, Prince Adelowo Adedeji Street',
		description: 'Beautiful terrace located in a serene environment',
		rating: 3.5,
		liked: false,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: [
			'home9.jpeg',
			'home10.jpeg',
			'home6.jpg',
			'home7.jpg',
			'home8.jpg',
		],
	},

	{
		id: 10,
		name: '5 bedroom Duplex in Ajah',
		location: '26, Prince Adelowo Adedeji Street',
		description: 'Beautiful terrace located in a serene environment',
		rating: 2,
		liked: false,
		contact: {
			name: 'John Nigerian man',
			phone: '+2348148120723',
		},
		images: [
			'home10.jpeg',
			'home6.jpg',
			'home7.jpg',
			'home8.jpg',
			'home9.jpeg',
		],
	},
]

function Listings({ searchQuery }) {
	// const [listings, setListings] = useLocalStorageState(ini)
	const [listings, setListings] = React.useState(initialListings)
	const filterListings = () => {
		if (searchQuery === '') {
			return listings
		}

		const query = searchQuery.toLowerCase()

		return listings.filter((listing) => {
			let name = listing.name.toLowerCase()
			if (name.startsWith(query) || name.includes(query)) {
				return listing
			}
		})
	}

	const toggleLike = (id) => {
		setListings(
			listings.map((listing) =>
				listing.id === id ? { ...listing, liked: !listing.liked } : listing
			)
		)
	}

	return (
		<Container>
			{filterListings().map((listing) => (
				<Card key={listing.id} listing={listing} onLike={toggleLike} />
			))}
		</Container>
	)
}

const Container = styled.div`
	margin-top: 2rem;
`

export default Listings

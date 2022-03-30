/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FaList, FaUsers, FaPowerOff } from 'react-icons/fa'

import NavListItem from './NavListItem'
import { useAuth } from '../AuthContext'

const navList = [
	{
		title: 'listing',
		IconComponent: FaList,
	},

	{
		title: 'users',
		IconComponent: FaUsers,
	},
]

function NavList() {
	const { logout } = useAuth()
	return (
		<ul css={list}>
			{navList.map((item) => (
				<NavListItem
					key={item.title}
					IconComponent={item.IconComponent}
					title={item.title}
				/>
			))}

			<Logout onClick={logout}>
				<FaPowerOff css={icon} />
				Logout
			</Logout>
		</ul>
	)
}

const list = css`
	list-style-type: none;
	padding: 0px;
`
const Logout = styled.button`
	color: var(--light);
	display: flex;
	align-items: center;
	font-size: 14px;
	padding: 0.3rem 0;
	margin-bottom: 0.5rem;
	width: 100%;
	cursor: pointer;
	border: none;
	background-color: transparent;
	outline: none !important;
`

const icon = css`
	color: var(--light);
	font-size: 18px;
	margin-right: 20px;
`
// const Logout = styled(NavListItem)``

export default NavList

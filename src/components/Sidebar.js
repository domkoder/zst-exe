/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import Nav from './Nav'
import ProCard from './ProCard'

function Sidebar({ click, handleClick }) {
	return (
		<Aside css={click ? sidebarMobil : null}>
			<Container>
				<div css={sidebarContainer}>
					<div
						css={css`
							display: flex;
							justify-content: space-between;
							align-items: center;
							${'' /* border: 2px solid red; */}
						`}
					>
						<Logo />
						<MenuIcon onClick={handleClick} />
					</div>
					<Nav />
				</div>
				<ProCard />
			</Container>
		</Aside>
	)
}

const Aside = styled.aside`
	height: 100vh;
	grid-area: sidebar;
	transition: all 0.5s;
	width: 220px;

	@media only screen and (max-width: 1100px) {
		display: none;
	} ;
`

const Container = styled.div`
	background-color: var(--white);
	border-right: 2px solid var(--sidebar-border);
	border-left: 2px solid var(--sidebar-border);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: auto;
	height: 100vh;

	/* Hide scrollbar for Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`

const sidebarContainer = css`
	padding: 2rem 0 0 2rem;
`

const sidebarMobil = css`
	display: inline !important;
	z-index: 100;
	left: 0 !important;
	position: absolute;
`

const MenuIcon = styled(FaTimes)`
	font-size: 30px;
	color: var(--light);
	cursor: pointer;
	display: none;
	margin-right: 1rem;
	@media only screen and (max-width: 1100px) {
		display: block;
	} ;
`

export default Sidebar

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'

function Header() {
	return (
		<Container>
			<Heading>Listings</Heading>
			<StatusBar>
				<button css={[status, active]}>Active</button>
				<button css={[status, inactive]}>Inactive</button>
			</StatusBar>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: base-line;
	margin-top: 2rem;
`
const Heading = styled.h2`
	font-size: 20px;
	color: var(--dark);
`
const StatusBar = styled.div`
	display: flex;
	border: 1px solid var(--sidebar-border);
	border-radius: var(--radius);
`
const status = css`
	padding: 0.5rem 1.5rem;
	width: 100px;
	border-radius: var(--radius);
	border: none;
	font-size: 14px;

	@media only screen and (max-width: 500px) {
		padding: 0.5rem;
	}
`
const active = css`
	background-color: var(--white);
	color: var(--dark);
`
const inactive = css`
	background-color: transparent;
	color: var(--light);
`

export default Header

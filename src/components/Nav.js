/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import NavList from './NavList'

function Nav() {
	return (
		<nav
			css={css`
				margin-top: 60px;
			`}
		>
			<NavList />
		</nav>
	)
}

export default Nav

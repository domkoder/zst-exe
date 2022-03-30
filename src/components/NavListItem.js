/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { NavLink, useResolvedPath, useMatch } from 'react-router-dom'

function NavListItem({ IconComponent, title }) {
	let resolved = useResolvedPath(`/${title}`)
	let match = useMatch({ path: resolved.pathname, end: true })

	return (
		<li>
			{match ? (
				<Link css={activeClass} to={`/${title}`}>
					<IconComponent css={icon} />
					{title}
					<Border />
				</Link>
			) : (
				<Link to={`/${title}`}>
					<IconComponent css={icon} />
					{title}
					<Border />
				</Link>
			)}
		</li>
	)
}

const icon = css`
	color: var(--light);
	font-size: 18px;
	margin-right: 20px;
`

const Link = styled(NavLink)`
	color: var(--light);
	text-decoration: none;
	text-transform: capitalize;
	display: flex;
	align-items: center;
	font-size: 14px;
	padding: 0.3rem 0;
	margin-bottom: 0.5rem;
`

const Border = styled.span`
	border-radius: 2px;
	height: 25px;
	margin-left: auto;
`

const activeClass = css`
	color: var(--dark);
	font-weight: bold;
	span {
		border: 2px solid var(--primary);
	}
	svg {
		color: var(--primary);
	}
`

export default NavListItem

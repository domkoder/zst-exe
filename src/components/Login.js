/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { useAuth } from '../AuthContext'
import Button from './Button'
import Input from './Input'

function Login() {
	const { login } = useAuth()

	const [error, setError] = React.useState(null)

	function handleSubmit(event) {
		event.preventDefault()
		const username = event.target.elements.username.value
		const password = event.target.elements.password.value

		if (username === 'user' && password === 'password') {
			login(username, password)
		} else {
			setError({ message: `Invalided user credential` })
		}
	}

	return (
		<div css={background}>
			<Card>
				<CardTitle>Login</CardTitle>
				{error ? <Error>{error.message}</Error> : null}
				<form onSubmit={handleSubmit}>
					<Input type="text" id="username" required placeholder="username" />

					<Input
						type="password"
						id="password"
						required
						placeholder="password"
					/>

					<Button css={buttonStyles} type="submit">
						Login
					</Button>
				</form>
			</Card>
		</div>
	)
}

const background = css`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.8);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`
const Card = styled.div`
	max-width: 350.21px;
	width: 100%;
	background: var(--white);
	box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
	border-radius: var(--radius);
	padding: 30px 20px;
	margin: 0 auto;
`

const CardTitle = styled.h2`
	font-weight: bold;
	font-size: 27.8054px;
	line-height: 35px;
	color: var(--dark);
	text-align: center;
	margin-bottom: 40px;
`

const Error = styled.p`
	padding: 1rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	transition: opacity 0.15s linear;
	color: #842029;
	background-color: #f8d7da;
	border-color: #f5c2c7;
`

const buttonStyles = css`
	display: grid;
	place-items: center;
	box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
	width: 100%;
	padding: 0.8rem;
`

export default Login

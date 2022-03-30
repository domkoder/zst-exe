/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import Input from './Input'
import Button from './Button'

function ContactModal({ showDialog, close, name }) {
	return (
		<Card isOpen={showDialog} onDismiss={close} aria-label="contact form">
			<button css={closeIcon} onClick={close}>
				<span aria-hidden>×</span>
			</button>
			<form onSubmit={(e) => e.preventDefault()}>
				<Input type="text" id="name" required placeholder="Full Name" />
				<Input type="email" id="email" required placeholder="Email" />
				<Input type="text" id="phone" required placeholder="Phone Number" />
				<textarea
					css={textareaStyles}
					name="message"
					id="message"
					rows="3"
					value={`I am interested in ${name}`}
				></textarea>
				<Button type="submit">Email Agent</Button>
			</form>
		</Card>
	)
}

const Card = styled(Dialog)`
	max-width: 500px;
	background: var(--white);
	box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
	border-radius: var(--radius);
	padding: 30px 20px;
	margin: 0 auto;
	@media only screen and (max-width: 850px) {
		width: 90% !important;
	} ;
`

const textareaStyles = css`
	width: 100%;
	border-radius: var(--radius);
	margin-bottom: 1rem;
	background: #ebeef8;
	border: none;
	padding: 1rem;
	font-size: 15.9027px;
	color: #808080;
`

const closeIcon = css`
	font-size: 1rem;
	border: none;
	cursor: pointer;
	margin-bottom: 1rem;
	height: 30px;
	width: 30px;
	border-radius: 15px;
`

export default ContactModal

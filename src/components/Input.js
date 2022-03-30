import styled from '@emotion/styled'

function Input({ type, id, placeholder }) {
	return (
		<FormGroup>
			<FormInput type={type} id={id} placeholder={placeholder} />
		</FormGroup>
	)
}
const FormInput = styled.input`
	background: #ebeef8;
	border-radius: var(--radius);
	border: none;
	padding: 1rem;
	font-size: 15.9027px;
	line-height: 18px;
	color: #808080;
	width: 100%;
	:focus {
		outline: 2px solid #d3d2f0;
	}
`

const FormGroup = styled.div`
	margin-bottom: 1.5rem;
`
export default Input

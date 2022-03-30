import styled from '@emotion/styled'
import { FaSearch } from 'react-icons/fa'

function SearchForm({ onChange }) {
	return (
		<Form>
			<SearchIcon />
			<SearchFormInput
				name="query"
				type="search"
				placeholder="search for listings"
				onChange={(e) => onChange(e.target.value)}
			/>
		</Form>
	)
}

const Form = styled.form`
	display: flex;
	position: relative;
	align-items: center;
`
const SearchIcon = styled(FaSearch)`
	position: absolute;
	left: 30px;
	top: 24px;
	font-size: 20px;
	color: var(--light);
`
const SearchFormInput = styled.input`
	width: 100%;
	padding: 25px 70px;
	border-radius: 10px;
	border: none;
	background: var(--white);
	color: var(--light);
	font-size: 14px;
	box-shadow: 4px 4px 4px rgb(0 0 0 / 10%);
	:focus {
		outline: 2px solid #d3d2f0;
	}
`

export default SearchForm

import Dashboard from '../components/Dashboard'
import Login from '../components/Login'

function UnauthenticatedScreen({ login }) {
	return (
		<>
			<Dashboard />
			<Login login={login} />
		</>
	)
}

export default UnauthenticatedScreen

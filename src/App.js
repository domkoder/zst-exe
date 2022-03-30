import React from 'react'
import { useAuth } from './AuthContext'
import Loading from './components/Loading'

const AuthenticatedScreen = React.lazy(() =>
	import('./screens/AuthenticatedScreen')
)
const UnauthenticatedScreen = React.lazy(() =>
	import('./screens/UnauthenticatedScreen')
)

function App() {
	const { currentUser } = useAuth()

	return (
		<React.Suspense fallback={<Loading />}>
			{currentUser ? <AuthenticatedScreen /> : <UnauthenticatedScreen />}
		</React.Suspense>
	)
}

export default App

import React from 'react'
import { useLocalStorageState } from './utils'

const AuthContext = React.createContext()

export function useAuth() {
	const context = React.useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within a AuthProvider')
	}
	return context
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useLocalStorageState(
		'currentUser',
		null
	)

	const login = (username, password) => {
		setCurrentUser({
			isLoggedIn: true,
			username,
			password,
		})
	}

	const logout = () => {
		setCurrentUser(null)
	}

	const value = {
		currentUser,
		login,
		logout,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

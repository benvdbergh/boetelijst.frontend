// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setLoggedIn] = useState(() => {
		// Initialize isLoggedIn state based on the value stored in localStorage
		return localStorage.getItem('isLoggedIn') === 'true';
	});


	const getToken = () => {
		const tokenString = sessionStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.token
	};

	const [token, setToken] = useState(getToken());
	

	const loginUser = (authToken) => {
		// Update isLoggedIn state
		setLoggedIn(true);

		saveToken(authToken)
		// Store the updated value in localStorage
		localStorage.setItem('isLoggedIn', 'true');
	};

	const logoutUser = () => {
		// Update isLoggedIn state
		setLoggedIn(false);
		// Remove the value from localStorage
		localStorage.removeItem('isLoggedIn');
	};

	const saveToken = userToken => {
		sessionStorage.setItem('token', JSON.stringify(userToken));
		setToken(userToken.token);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser, token }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

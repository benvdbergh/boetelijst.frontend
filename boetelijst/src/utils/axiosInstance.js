// axiosInstance.js
import axios from 'axios';
import useToken from 'hooks/useToken';

const ApiInstance = axios.create({
	baseURL: 'http://localhost:8000/api/',
	timeout: 1000
});

const setAuthorizationHeader = (config, token) => {
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
};

// Add a request interceptor
ApiInstance.interceptors.request.use(
	(config) => {
		const { token } = useToken(); // Call the useToken hook within the request interceptor
		return setAuthorizationHeader(config, token);
	},
	(error) => {
		// Handle errors here
		return Promise.reject(error);
	}
);

export default ApiInstance;
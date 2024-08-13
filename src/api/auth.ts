import axios from 'axios';

const API_URL = 'http://192.168.200.40:8000/api';

export const login = async (username: string, password: string) => {
	const response = await axios.post(`${API_URL}/auth/login/`, {
		username,
		password,
	});
	console.log(response.data);

	return response.data;
};

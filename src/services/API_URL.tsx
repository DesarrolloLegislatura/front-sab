import axios from 'axios';

const sab_API = axios.create({
	baseURL: 'http://170.78.192.148:8000/api/',
});

export { sab_API };

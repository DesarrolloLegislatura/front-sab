import axios from 'axios';

const sab_API = axios.create({
	baseURL: 'http://192.168.200.41:8000/api/',
});

export { sab_API };

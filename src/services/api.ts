import axios from 'axios';
import { typeDocument } from '../interfaces/interfaces';

const JWT_TEMPORAL =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0MDc2NjczLCJpYXQiOjE3MjQwNzYzNzMsImp0aSI6IjNlYzg5YTdkNjgzNzQ2NjM4ZTI1ZDdiYjVlNTFlNzE0IiwidXNlcl9pZCI6MTJ9.hT2Dgc423gJ_fj_NYoRl6e3BvjpIiJgsJ1rBCUKdAjU';

const TYPE_MODE = 'Aplication/Json';

export const sab_API = axios.create({
	baseURL: 'http://192.168.200.40:8000/api/',
	headers: {
		'Content-Type': `${TYPE_MODE}`,
		Authorization: `Bearer ${JWT_TEMPORAL}`,
	},
});

export const getDocuments = async () => {
	return sab_API.get<typeDocument[]>('typedocument');
};

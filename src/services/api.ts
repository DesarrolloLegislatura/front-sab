import axios from 'axios';
import { typeDocument } from '../interfaces/interfaces';
import { useState } from 'react';
import useDocStorage from '../store/useDocStorage';

const JWT_TEMPORAL =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0MDc2NjczLCJpYXQiOjE3MjQwNzYzNzMsImp0aSI6IjNlYzg5YTdkNjgzNzQ2NjM4ZTI1ZDdiYjVlNTFlNzE0IiwidXNlcl9pZCI6MTJ9.hT2Dgc423gJ_fj_NYoRl6e3BvjpIiJgsJ1rBCUKdAjU';

const TYPE_MODE = 'Aplication/Json';

export const sab_API = axios.create({
	baseURL: 'http://170.78.192.148:8000/api/',
	headers: {
		'Content-Type': `${TYPE_MODE}`,
		Authorization: `Bearer ${JWT_TEMPORAL}`,
	},
});

export const getDocumentsApi = async () => {
	/* devuelve un arreglo de objetos de los documentos 
	[{
	id: number;
	name: string;
	description: string;
	active: number;}] */
	return sab_API.get<typeDocument[]>('typedocument');
};
//borra el documento del id proporcionado
export const deleteDocApi = async (id: number) => {
	sab_API.delete(`typedocument/${id}`).catch(err => alert(err));
};

export const updateDocApi = async (data: typeDocument) => {
	const idDoc = useDocStorage(state => state.id);
	sab_API.put(`typedocument${idDoc}`, {
		name: data.name,
		description: data.description,
		active: data.active,
	});
};
//obtiene un documento en especifico con el id proporcionado
export const getDocWhitIdApi = async (id: number) => {
	return sab_API
		.get<typeDocument[]>(`typedocument/${id}`)
		.catch(err => alert(err));
};
//crea un nuevo documento
export const createDocApi = async (data: typeDocument) => {
	sab_API.post('typedocument', {
		name: data.name,
		description: data.description,
		active: data.active,
	});
};

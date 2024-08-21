import { useState } from 'react';
import { updateDocApi } from '../../services/api';
import { typeDocument } from '../../interfaces/interfaces';
import { useDocStorage } from '../../store/useDocStorage';
import { useForm } from 'react-hook-form';

export const TypeDocUpd = () => {
	const docFromStorage = useDocStorage(state => state);
	//definimos un estado inicial del documento para modificar luego
	const [docToUpdate, setDocToUpdate] = useState<typeDocument>(docFromStorage);

	//obtenemos del storage el id del documento a modificar
	const dataForUpdDocs = useDocStorage(state => state.updateDocFromStorage);

	const { register, handleSubmit } = useForm<typeDocument>();

	const onSubmit = (values: typeDocument) => {
		//realizamos el set en storage para actualizar los datos en storage
		dataForUpdDocs(values);
		setDocToUpdate(values);
		/* updateDocApi(values); falta arreglar los cors */
	};

	return (
		<div>
			<h1 className='text-4xl'>UPDATE DOC</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col'>
				<label>Tipo de Nota</label>
				<input
					type='text'
					className='border-2'
					placeholder={docToUpdate.name}
					{...register('name')}
				/>
				<label>Descripción</label>
				<input
					type='text'
					className='border-2'
					placeholder={docToUpdate.description}
					{...register('description')}
				/>
				<label>Estado</label>
				<select defaultValue={'DEFAULT'}>
					<option
						value='DEFAULT'
						disabled>
						Choose a salutation ...
					</option>
					<option
						{...register('active')}
						value='1'>
						1
					</option>
					<option
						{...register('active')}
						value='2'>
						2
					</option>
				</select>
				<button
					type='submit'
					className='rounded w-20'>
					Enviar
				</button>
			</form>
		</div>
	);
};

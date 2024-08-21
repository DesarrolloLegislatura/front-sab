import { useNavigate } from 'react-router-dom';
import { typeDocument } from '../../interfaces/interfaces';
import { deleteDocApi } from '../../services/api';
import useDocStorage from '../../store/useDocStorage';
interface Props {
	docs: typeDocument[];
}

export const TableNotes = ({ docs }: Props) => {
	//usamos el navegador
	const navigate = useNavigate();
	//instaciamos la funcion para setear en storage el doc seleccionado
	const setDocToModify = useDocStorage(state => state.setSelectedDoc);
	//buscamos el id del doc que necesitamos hacer update, si lo encontramos cambiamos de vista y seteamos
	const handleUpdate = (id: number) => {
		const idDoc = docs.find(findId => findId.id == id);
		if (idDoc != undefined) {
			setDocToModify(idDoc);
			navigate('/update');
		}

		console.log(idDoc?.name);
	};
	const handreDelete = (id: number) => {
		const idDoc = docs.find(findId => findId.id == id);
		//deleteDocApi(id); falta arreglar los cors
		console.log(idDoc?.id);
	};
	return (
		<table className='h-6 bg-slate-200'>
			<thead className='bg-slate-400'>
				<tr>
					<th className='p-2 text-xs md:text-[12px]'>Documento</th>
					<th className='p-2 text-xs md:text-[12px]'>Descripción</th>
					<th className='p-2 text-xs md:text-[12px]'>Estado</th>
					<th className='p-2 text-xs md:text-[12px]'>Actualizar</th>
					<th className='p-2 text-xs md:text-[12px]'>Borrar</th>
				</tr>
			</thead>
			{docs.map(doc => (
				<tbody key={doc.id}>
					<tr>
						<td className='p-2 text-[10px] md:text-[12px]'>{doc.name}</td>
						<td className='p-2 text-[9px] md:text-[12px] lg:text-[13px]'>
							{doc.description}
						</td>
						<td className='p-2 text-[10px] md:text-[12px]'>{doc.active}</td>
						<td className='p-2 text-[10px] md:text-[12px]'>
							<button onClick={() => handleUpdate(doc!.id)}>Actualizar</button>
						</td>
						<td className='p-2 text-[10px] md:text-[12px]'>
							<button onClick={() => handreDelete(doc!.id)}>Borrar</button>
						</td>
					</tr>
				</tbody>
			))}
		</table>
	);
};

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocumentsApi } from '../../services/api';
import { typeDocument } from '../../interfaces/interfaces';
import { docStore } from '../../store/docStore';
import { TableNotes } from '../../components/container/TableNotes';

export const TypeDocList = () => {
	//estado para llenar con la llamada de la api docs
	const [docs, setDocs] = useState<typeDocument[]>([]);
	//estado de prueba hasta que se arreglen los cors
	const [docsTest, setDocsTest] = useState<typeDocument[]>(docStore);
	/* const getListDocuments = async () => {
		const response = getDocumentsApi();
		setDocs((await response).data);
	};

	useEffect(() => {
		getListDocuments();
	}, []); */

	return (
		<div className='flex flex-col items-center justify-center min-h-screen gap-10'>
			<h1 className='text-3xl'>Typedocument</h1>
			<section>
				<TableNotes docs={docsTest} />
			</section>
			<div className='flex flex-col gap-10'>
				{/* Mas contenido */}
				<Link
					to='/'
					className='border max-w-48 p-4 border-red-900'>
					go home
				</Link>
			</div>
		</div>
	);
};

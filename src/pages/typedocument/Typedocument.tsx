import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocuments } from '../../services/api';
import { typeDocument } from '../../interfaces/interfaces';
import { docStore } from '../../store/docStore';
import { TableNotes } from '../../components/container/TableNotes';

const Typedocument = () => {
	const [docs, setDocs] = useState<typeDocument[]>([]);
	const [docsTest, setDocsTest] = useState<typeDocument[]>(docStore);
	/* const getListDocuments = async () => {
		const response = getDocuments();
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
export default Typedocument;

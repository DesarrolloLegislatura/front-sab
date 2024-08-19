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
			<h1>Typedocument</h1>
			<section>
				<table className='h-6 bg-slate-200'>
					<thead className='bg-slate-400'>
						<tr>
							<th className='p-2 text-xs md:text-[12px] '>Documento</th>
							<th className='p-2 text-xs md:text-[12px]'>Descripción</th>
							<th className='p-2 text-xs md:text-[12px]'>Estado</th>
						</tr>
					</thead>
					{/* {docs.map((doc, index) => (
						<tbody
							key={index}
							className=''>
							<tr>
								<td className='p-2 text-[10px] md:text-[12px]'>{doc.name}</td>
								<td className='p-2 text-[9px] md:text-[12px] lg:text-[13px]'>
									{doc.description}
								</td>
								<td className='p-2 text-[10px] md:text-[12px]'>{doc.active}</td>
							</tr>
						</tbody>
					))} */}
					{docsTest.map((doc, index) => (
						<tbody
							key={index}
							className=''>
							<tr>
								<td className='p-2 text-[10px] md:text-[12px]'>{doc.name}</td>
								<td className='p-2 text-[9px] md:text-[12px] lg:text-[13px]'>
									{doc.description}
								</td>
								<td className='p-2 text-[10px] md:text-[12px]'>{doc.active}</td>
							</tr>
						</tbody>
					))}
				</table>
				{/* <TableNotes {...docsTest} /> */}
			</section>
			<div className='flex flex-col gap-10'>
				{/* Mas contenido */}
				<Link
					to='/'
					className='border max-w-48 p-4 border-red-900'>
					go home{' '}
				</Link>
			</div>
		</div>
	);
};
export default Typedocument;

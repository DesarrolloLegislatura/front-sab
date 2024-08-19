import { typeDocument } from '../../interfaces/interfaces';

export const TableNotes = (docs: typeDocument[]) => {
	return (
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
			{docs.map((doc, index) => (
				<tbody key={index}>
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
	);
};

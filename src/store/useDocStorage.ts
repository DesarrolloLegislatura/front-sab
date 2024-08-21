import { create } from 'zustand';
import { typeDocument } from '../interfaces/interfaces';

export const useDocStorage = create<typeDocument>(set => ({
	//establecemos el inicio del estado
	id: 0,
	name: '',
	description: '',
	active: 0,

	//realizamos un set del documento que necesitamos antes de hacer update para poder obtener el id
	setSelectedDoc: (doc: typeDocument) => {
		set(() => ({
			id: doc.id,
			name: doc.name,
			description: doc.description,
			active: doc.active,
		}));
	},

	//cono el id seteado procedemos a realizar el update
	updateDocFromStorage: (data: typeDocument) =>
		set(() => ({
			name: data.name,
			description: data.description,
			active: data.active,
		})),
}));
export default useDocStorage;

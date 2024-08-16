import { create } from 'zustand';
import { sab_API } from '../services/api';

export const useCounterStore = create((set, get) => ({
	logUser: async () => {
		const user = await sab_API.post('auth/login/');
	},
	cleanUserStore: () => set({}, true),
	getUser: () => {},
}));

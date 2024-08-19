import { create } from 'zustand';
import { userState } from '../interfaces/interfaces';

export const userStore = create<userState>((set, get) => ({
	name: '',
	token: '',
	isAuthenticated: false,
	setUser: (name: string, token: string) =>
		set(() => ({
			name: name,
			token: token,
		})),
	getUserAcces: () => {
		get();
	},
}));

import { create } from 'zustand';
import { userState } from '../interfaces/interfaces';

export const userStore = create<userState>(set => ({
	name: '',
	token: '',
	isAuthenticated: false,
	setUser: (name: string) =>
		set(() => ({
			name: name,
		})),
}));

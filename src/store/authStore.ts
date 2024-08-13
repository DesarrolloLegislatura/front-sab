import { create } from 'zustand';
import { AuthState } from '../interfaces/Interfaces';

export const useAuthStore = create<AuthState>(set => ({
	token: null,
	isAuthenticated: false,
	setToken: (token: string) => set({ token, isAuthenticated: true }),
	clearToken: () => set({ token: null, isAuthenticated: false }),
}));

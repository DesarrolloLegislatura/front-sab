import { create } from 'zustand';
import { userState } from '../interfaces/interfaces';

// Definimos el store global
const userStore = create<userState>((set, get) => ({
	// Estado inicial
	name: '',
	token: '',
	isAuthenticated: false,
	// Acciones para manipular el estado
	// login: (user) => set({ user, isAuthenticated: true }),
	// logout: () => set({ user: null, isAuthenticated: false }),
}));

export default userStore;

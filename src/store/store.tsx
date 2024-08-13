import { create } from 'zustand';

// Definimos el store global
const useStore = create(set => ({
	// Estado inicial
	// user: null,
	// isAuthenticated: false,
	// // Acciones para manipular el estado
	// login: (user) => set({ user, isAuthenticated: true }),
	// logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useStore;

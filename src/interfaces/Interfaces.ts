export interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
	setToken: (token: string) => void;
	clearToken: () => void;
}

export interface LoginFormInputs {
	username: string;
	password: string;
}

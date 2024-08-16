export interface userState {
	name: string;
	token: string;
	isAuthenticated: boolean;
	setUser: (access: string, name: string) => void;
}

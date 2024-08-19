export interface userState {
	name: string;
	token: string;
	isAuthenticated: boolean;
	setUser: (access: string, name: string) => void;
}

export interface typeDocument {
	name: string;
	description: string;
	active: number;
}

export interface userState {
	name: string;
	token: string;
	isAuthenticated: boolean;
	setUser: (access: string, name: string) => void;
}

export interface typeDocument {
	id: number;
	name: string;
	description: string;
	active: number;
	updateDocFromStorage: (data: typeDocument) => void;
	setSelectedDoc: (data: typeDocument) => void;
}

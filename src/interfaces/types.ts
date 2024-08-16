type userState = {
	firstName: string;
	lastName: string;
};
type updateUser = {
	updateFirstName: (firstName: userState['firstName']) => void;
	updateLastName: (lastName: userState['lastName']) => void;
};

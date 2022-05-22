export interface User {
	user_id: string;
	password: string;
	name: string;
	email: string;
	gender: Boolean;
	dob: string | null;
	phone: string;
	address: string;
	type: string;
	reward: number;
	company_name: string;
}

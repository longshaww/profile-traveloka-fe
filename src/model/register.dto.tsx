export interface UserRegisterDTO {
	username: string;
	password: string;
	name: string;
	email: string;
	gender: number | string;
	dob: string;
	phone: string;
	address: string;
	type: string;
	reward: number | string;
	company_name?: string;
	services?: string[];
}

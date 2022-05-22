import { FETCH_USER } from "../constant/constant";

const fetchUser = (data: any) => ({
	type: FETCH_USER,
	payload: data,
});

export { fetchUser };

import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import NavbarApp from "../components/Navbar";
import globalStateAndAction from "../container/global.state.action";
import { User } from "../model/user";

interface Props {
	user: User;
	fetchUser: (data: User[]) => void;
}

const Layout: React.FC<Props> = ({ user, fetchUser }) => {
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = localStorage.getItem("access_token");
		async function getUser() {
			const req = await fetch(
				`${process.env.REACT_APP_API_URL}/api/user/me`,
				{
					headers: {
						authorization: `Bearer ${accessToken}`,
					},
				}
			);
			const response = await req.json();
			fetchUser(response.infoUser);
		}
		getUser();
	}, [navigate, fetchUser]);
	return (
		<>
			<NavbarApp user={user} />
			<Container className="mt-5">
				<Outlet />
			</Container>
		</>
	);
};

export default globalStateAndAction(Layout);

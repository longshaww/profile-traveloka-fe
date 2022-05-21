import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import NavbarApp from "../components/Navbar";

interface Props {}
const Layout: React.FC<Props> = (props) => {
	return (
		<>
			<NavbarApp />
			<Container className="mt-5">
				<Outlet />
			</Container>
		</>
	);
};

export default Layout;

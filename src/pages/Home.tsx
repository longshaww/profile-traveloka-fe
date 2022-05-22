import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const checkLogin = localStorage.getItem("access_token");
		if (!checkLogin) {
			navigate("/login");
		}
	}, [navigate]);
	return <div>Home</div>;
};

export default Home;

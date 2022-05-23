import { Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface UserLoginDTO {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const urlRedirect = searchParams.get("callback");

	useEffect(() => {
		const checkLogin = localStorage.getItem("access_token");
		if (checkLogin) {
			navigate({
				pathname: "/",
				search: `?${createSearchParams({
					accessToken: checkLogin,
				})}`,
			});
		}
	}, [navigate]);

	const [inputs, setInputs] = useState<UserLoginDTO>({
		username: "",
		password: "",
	});

	const [snackBar, setOpenSnackbar] = useState(false);

	const handleChange = (event: any) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	async function onLogInSubmit(e: any) {
		if (inputs.username === "" || inputs.password === "") {
			setOpenSnackbar(true);
			return;
		}
		const req = await fetch(
			`${process.env.REACT_APP_API_URL}/api/user/postLogin`,
			{
				method: "POST",
				body: JSON.stringify(inputs),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		const response = await req.json();
		if (response.success) {
			localStorage.setItem("access_token", response.accessToken);
			const url = urlRedirect
				? urlRedirect + "?access_token=" + response.accessToken
				: "/";
			window.location.href = url;
		} else {
			setOpenSnackbar(true);
		}
	}

	const handleCloseSnackBar = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackbar(false);
	};

	return (
		<div className="bg-light p-5 shadow">
			<div className="d-flex align-items-center justify-content-center flex-column">
				<div className="mb-3">
					<img
						src="https://play-lh.googleusercontent.com/gAdBfiJ00pLq8Bu2nX6LoDbbyOmnJEOxX1l8hYJmPGO5pq6zMJxrCK3TTlu8Fuf6UFI"
						className="rounded-circle"
						alt=""
						style={{ width: "8rem", height: "8rem" }}
					/>
				</div>
				<h2 className="mb-5">Login Traveloka</h2>
			</div>
			<div className="">
				<Box sx={{ marginBottom: 3 }}>
					<TextField
						id="outlined-basic"
						label="Tên đăng nhập"
						onChange={handleChange}
						value={inputs.username}
						name="username"
						variant="outlined"
						fullWidth
					/>
				</Box>
				<Box sx={{ marginBottom: 3 }}>
					<TextField
						id="outlined-basic"
						label="Mật khẩu"
						onChange={handleChange}
						value={inputs.password}
						name="password"
						variant="outlined"
						fullWidth
						type="password"
					/>
				</Box>
				<Box sx={{ marginBottom: 3 }}>
					<span>Bạn chưa có tài khoản ?</span>
					<Link
						to="/register"
						className="ms-1 text-decoration-none"
					>
						Đăng kí
					</Link>
				</Box>
				<Button
					variant="contained"
					fullWidth
					onClick={onLogInSubmit}
				>
					Đăng nhập
				</Button>
			</div>
			<Snackbar
				open={snackBar}
				autoHideDuration={3000}
				onClose={handleCloseSnackBar}
			>
				<Alert
					onClose={handleCloseSnackBar}
					severity="error"
					sx={{ width: "100%" }}
				>
					Validation failed
				</Alert>
			</Snackbar>
		</div>
	);
};

export default Login;

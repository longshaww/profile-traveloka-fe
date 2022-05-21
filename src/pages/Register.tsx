import { LocalizationProvider, DatePicker } from "@mui/lab";
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useNavigate } from "react-router-dom";

interface Props {}

interface UserRegisterDTO {
	username: string;
	password: string;
	name: string;
	email: string;
	gender: number | string;
	dob: Date;
	phone: string;
	address: string;
	type: string;
	reward: number | string;
}

const gender = [
	{
		value: 0,
		label: "Nam",
	},
	{
		value: 1,
		label: "Nữ",
	},
];

const Register: React.FC<Props> = (props) => {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState<UserRegisterDTO>({
		username: "",
		password: "",
		name: "",
		email: "",
		gender: 0,
		dob: new Date(),
		phone: "",
		address: "",
		type: "USER",
		reward: "",
	});

	const [snackBar, setOpenSnackbar] = useState(false);

	const handleChange = (event: any) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	const handleDOBChange = (newValue: any) => {
		setInputs({ ...inputs, dob: newValue });
	};

	const handleGenderChange = (e: any) => {
		setInputs({ ...inputs, gender: parseInt(e.target.value) });
	};

	async function onRegisterSubmit(e: any) {
		if (
			(inputs.address === "" || inputs.email === "",
			inputs.gender === "",
			inputs.name === "",
			inputs.password === "",
			inputs.phone === "",
			inputs.username === "")
		) {
			setOpenSnackbar(true);
			return;
		}
		const req = await fetch(
			`http://localhost:5000/api/user/postRegister`,
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
		navigate("/login");
		console.log(response);
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
		<>
			<h3>Thông tin cá nhân</h3>
			<Box sx={{ marginBottom: 3 }}>
				<TextField
					id="outlined-basic"
					label="Họ và tên"
					onChange={handleChange}
					value={inputs.name}
					name="name"
					variant="outlined"
					fullWidth
				/>
			</Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					marginBottom: 3,
				}}
			>
				<Box sx={{ marginRight: 2 }}>
					<TextField
						id="outlined-basic"
						label="Giới tính"
						select
						onChange={handleGenderChange}
						value={inputs.gender}
						name="gender"
						SelectProps={{
							native: true,
						}}
						variant="outlined"
						fullWidth
					>
						{gender.map((option) => (
							<option
								key={option.value}
								value={option.value}
							>
								{option.label}
							</option>
						))}
					</TextField>
				</Box>

				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DatePicker
						label="Ngày sinh"
						inputFormat="DD/MM/YYYY"
						value={inputs.dob}
						onChange={handleDOBChange}
						renderInput={(params) => (
							<TextField {...params} />
						)}
					/>
				</LocalizationProvider>
			</Box>
			<Box sx={{ marginBottom: 3 }}>
				<TextField
					id="outlined-basic"
					label="Địa chỉ"
					onChange={handleChange}
					value={inputs.address}
					name="address"
					variant="outlined"
					fullWidth
				/>
			</Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
				}}
			>
				<Box sx={{ marginRight: 2 }}>
					<TextField
						id="outlined-basic"
						label="Email"
						onChange={handleChange}
						value={inputs.email}
						name="email"
						variant="outlined"
						fullWidth
					/>
				</Box>
				<TextField
					id="outlined-basic"
					label="Số điện thoại"
					onChange={handleChange}
					value={inputs.phone}
					name="phone"
					variant="outlined"
				/>
			</Box>
			<h3 className="mt-3">Tạo tài khoản</h3>
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
					label="Password"
					name="password"
					onChange={handleChange}
					value={inputs.password}
					variant="outlined"
					type="password"
					fullWidth
				/>
			</Box>
			<Button variant="contained" fullWidth onClick={onRegisterSubmit}>
				Đăng kí
			</Button>
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
		</>
	);
};

export default Register;

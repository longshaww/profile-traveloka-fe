import { Box, TextField, Button } from "@mui/material";

const UsernamePasswordRegister: React.FC<any> = ({
	onRegisterSubmit,
	inputs,
	handleInputChange,
}) => {
	return (
		<>
			<h3 className="mt-5 mb-3">Tạo tài khoản</h3>
			<Box sx={{ marginBottom: 3 }}>
				<TextField
					id="outlined-basic"
					label="Tên đăng nhập"
					onChange={handleInputChange}
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
					onChange={handleInputChange}
					value={inputs.password}
					variant="outlined"
					type="password"
					fullWidth
				/>
			</Box>
			<Box sx={{ marginY: 5 }}>
				<Button
					variant="contained"
					fullWidth
					onClick={onRegisterSubmit}
				>
					Đăng kí
				</Button>
			</Box>
		</>
	);
};
export default UsernamePasswordRegister;

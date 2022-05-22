import { LocalizationProvider, DatePicker } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

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
const UserInfoRegister: React.FC<any> = ({
	inputs,
	setInputs,
	handleInputChange,
}) => {
	const handleDOBChange = (newValue: any) => {
		setInputs({ ...inputs, dob: moment(newValue).format("YYYY/MM/DD") });
	};

	const handleGenderChange = (e: any) => {
		setInputs({ ...inputs, gender: parseInt(e.target.value) });
	};

	return (
		<>
			<h3 className="mb-3">Thông tin cá nhân</h3>
			<Box sx={{ marginBottom: 3 }}>
				<TextField
					id="outlined-basic"
					label="Họ và tên"
					onChange={handleInputChange}
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
					onChange={handleInputChange}
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
						onChange={handleInputChange}
						value={inputs.email}
						name="email"
						variant="outlined"
						fullWidth
					/>
				</Box>
				<TextField
					id="outlined-basic"
					label="Số điện thoại"
					onChange={handleInputChange}
					value={inputs.phone}
					name="phone"
					variant="outlined"
				/>
			</Box>
		</>
	);
};

export default UserInfoRegister;

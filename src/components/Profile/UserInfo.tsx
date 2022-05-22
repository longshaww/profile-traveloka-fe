import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
	Select,
	SelectChangeEvent,
	MenuItem,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormControl,
	TextField,
	Grid,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import { User } from "../../model/user";

interface Props {
	user: User;
}

const UserInfo: React.FC<Props> = ({ user }) => {
	return (
		<Grid container spacing={2} padding={"2rem"}>
			<Grid item xs={12}>
				<h2>Thông tin cá nhân</h2>
			</Grid>
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined-adornment">
						Tên đầy đủ
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment"
						defaultValue={user.name}
						// onChange={(event) => {
						// 	sSignUp.set_fullName(event.target.value);
						// }}
						startAdornment={
							<InputAdornment position="start"></InputAdornment>
						}
						label="Tên đầy đủ"
						name="name"
						required
					/>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Giới tính
					</InputLabel>
					<Select
						labelId="gender-select-label"
						id="gender-select"
						label="Giới tính"
						name="gender"
						defaultValue={user.gender ? 1 : 0}
						// onChange={handleGenderChange}
						required
					>
						<MenuItem value={0}>Nam</MenuItem>
						<MenuItem value={1}>Nữ</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl variant="outlined" fullWidth>
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DatePicker
							label="Ngày sinh"
							inputFormat="DD/MM/YYYY"
							value={user.dob}
							onChange={() => alert()}
							renderInput={(params) => (
								<TextField {...params} />
							)}
						/>
					</LocalizationProvider>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
					<OutlinedInput
						id="outlined"
						label="Địa chỉ"
						name="address"
						required
						defaultValue={user.address}
						// onChange={(event) => {
						// 	sSignUp.set_address(event.target.value);
						// }}
					/>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined">Email</InputLabel>
					<OutlinedInput
						id="outlined"
						label="Email"
						name="email"
						type="email"
						defaultValue={user.email}
						// onChange={(event) => {
						// 	sSignUp.set_email(event.target.value);
						// }}
						required
					/>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined">
						Số điện thoại
					</InputLabel>
					<OutlinedInput
						id="outlined"
						label="Số điện thoại"
						name="phone"
						defaultValue={user.phone}
						// onChange={(event) => {
						// 	sSignUp.set_phone(event.target.value);
						// }}
						required
					/>
				</FormControl>
			</Grid>
		</Grid>
	);
};

export default UserInfo;

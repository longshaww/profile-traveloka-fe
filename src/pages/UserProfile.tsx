import { Grid, Paper } from "@mui/material";
import { UserChangePassword } from "../components/Profile/UserChangePassword";
import UserInfo from "../components/Profile/UserInfo";
import globalStateAndAction from "../container/global.state.action";
import { User } from "../model/user";

interface Props {
	user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {
	return (
		<>
			<Grid container spacing={1}>
				<Paper elevation={3} sx={{ padding: "1rem" }}>
					{user.name && (
						<>
							<UserInfo user={user} />
							<UserChangePassword />
						</>
					)}
				</Paper>
			</Grid>
		</>
	);
};

export default globalStateAndAction(UserProfile);

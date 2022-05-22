import { connect } from "react-redux";
import { fetchUser } from "../actions/user";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		return {
			user: state.userState.user,
		};
	};

	const mapActionToProps = (dispatch) => ({
		fetchUser: (data) => dispatch(fetchUser(data)),
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}

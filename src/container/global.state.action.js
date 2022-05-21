import { connect } from "react-redux";
import { setDetailLessor } from "../actions/detail.lessor";
import { setListLessor } from "../actions/lessor";
import { setDetailApartment } from "../actions/detail.apartment";
import { setCheckInDate, setCheckOutDate } from "../actions/date.choosen";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		return {
			detailLessor: state.detailLessor.lessor,
			listLessor: state.listLessor.listLessor,
			detailApartment: state.detailApartment.apartment,
			checkInDate: state.dateChoosen.checkInDate,
			checkOutDate: state.dateChoosen.checkOutDate,
		};
	};

	const mapActionToProps = (dispatch) => ({
		setDetailLessor: (data) => dispatch(setDetailLessor(data)),
		setListLessor: (data) => dispatch(setListLessor(data)),
		setDetailApartment: (data) => dispatch(setDetailApartment(data)),
		setCheckInDate: (data) => dispatch(setCheckInDate(data)),
		setCheckOutDate: (data) => dispatch(setCheckOutDate(data)),
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}

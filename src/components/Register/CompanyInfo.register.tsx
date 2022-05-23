import { FormControlLabel, Checkbox, TextField, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Services } from "../../model/service";

const CompanyInfoRegister: React.FC<any> = ({
	inputs,
	handleInputChange,
	companyChecked,
	setCompanyChecked,
	serviceChecked,
	setServiceChecked,
}) => {
	const [serviceList, setServiceList] = useState<Services[]>([]);

	//Get services at first
	useEffect(() => {
		async function getServices() {
			const req = await fetch(
				`${process.env.REACT_APP_API_URL}/api/service/`
			);
			const response = await req.json();
			setServiceList(response.listService);
		}
		getServices();
	}, []);

	const handleRegisterCompany = () => {
		setCompanyChecked(!companyChecked);
	};

	const handleServicesCheckBox = (service_id: string) => {
		setServiceChecked((prev: any) => {
			const isChecked = serviceChecked.includes(service_id);
			if (isChecked) {
				return serviceChecked.filter(
					(item: any) => item !== service_id
				);
			} else {
				return [...prev, service_id];
			}
		});
	};

	return (
		<>
			<FormControlLabel
				control={<Checkbox checked={companyChecked} />}
				label="Đăng kí tài khoản doanh nghiệp"
				onChange={handleRegisterCompany}
			/>
			{companyChecked && (
				<div>
					<h3 className="mt-5">Thông tin doanh nghiệp</h3>
					<TextField
						id="outlined-basic"
						label="Tên doanh nghiệp"
						name="company_name"
						onChange={handleInputChange}
						value={inputs.company_name}
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: "repeat(5,1fr)",
						}}
					>
						{serviceList.length > 0 &&
							serviceList.map(
								(service: Services, index: number) => {
									return (
										<FormControlLabel
											key={index}
											control={
												<Checkbox
													checked={serviceChecked.includes(
														service.service_id
													)}
												/>
											}
											label={
												service.service_code
											}
											onChange={() =>
												handleServicesCheckBox(
													service.service_id
												)
											}
										/>
									);
								}
							)}
					</Box>
				</div>
			)}
		</>
	);
};

export default CompanyInfoRegister;

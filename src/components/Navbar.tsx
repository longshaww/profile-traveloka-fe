import React, { useState } from "react";
import {
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	Navbar,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/navbar.scss";
import "../assets/css/app.scss";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Icon1 } from "../assets/icons/icon1.svg";
import { ReactComponent as Icon2 } from "../assets/icons/icon2.svg";
import { ReactComponent as Icon3 } from "../assets/icons/icon3.svg";

const NavbarApp: React.FC<any> = ({ user }) => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const menu = [
		{
			title: "Vận chuyển",
			children: [
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c51ec07e3f7fb509b246825c6b7c6d6d.svg",
					title: "Đưa đón sân bay",
					href: "#",
				},
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/36bca62f8840da5ea3670bf693f90f90.svg",
					title: "Combo tiết kiệm",
					href: "#",
				},
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/44b891a96bfa52b48bbc541a4b1bb226.svg",
					title: "Cho thuê xe",
					href: "#",
				},
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/301c3038b8bc837164fca384096404a6.svg",
					title: "JR Pass",
					href: "#",
				},
			],
		},
		{
			title: "Chỗ ở",
			children: [
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f35d2c4e9c6c6663f831cca1d2392b3.svg",
					title: "Căn hộ",
					href: "#",
				},
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/36bca62f8840da5ea3670bf693f90f90.svg",
					title: "Combo tiết kiệm",
					href: "#",
				},
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f35d2c4e9c6c6663f831cca1d2392b3.svg",
					title: "Biệt thự",
					href: "#",
				},
			],
		},
		{
			title: "Hoạt động và giải trí",
			children: [
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/56ad06f2128fa715be3108b2b90e927c.svg",
					title: "Xperience",
					href: "#",
				},
			],
		},
		{
			title: "Sản phẩm bổ sung",
			children: [
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f9dbe1077251284edf2c4f0eac008a70.svg",
					title: "Điểm thưởng của tôi",
					href: "#",
				},
				{
					icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/ed63a7bd6105a2fc1d1d9ec52c7a051b.svg",
					title: "Phiếu quà tặng",
					href: "#",
				},
			],
		},
	];

	const onLogOutClick = () => {
		localStorage.removeItem("access_token");
		navigate("/login");
	};

	return (
		<>
			<header className="header-navbar">
				<div className="position_1">
					<div className="d-flex justify-content-evenly align-items-center">
						<div id="center-logo" className="">
							<Link to="/" className="d-inline-block">
								<Logo />
							</Link>
						</div>
						<Navbar expand="md" light className="d-flex">
							<NavbarToggler onClick={toggle} />
							<Collapse isOpen={isOpen} navbar>
								<Nav className="m-auto" navbar>
									<NavItem>
										<Link
											to="/"
											className="nav-link"
										>
											<Icon1 />
											<span className="ps-1">
												Tải ứng dụng
											</span>
										</Link>
									</NavItem>
									<NavItem>
										<Link
											to="/"
											className="nav-link"
										>
											<img
												src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_marketing_partnership_24px-16e02cdec7a8ae7587096bba0a30cab2.svg"
												alt=""
											/>
											<span className="ps-1">
												Họp tác với chúng
												tôi
											</span>
										</Link>
									</NavItem>
									<NavItem>
										<Link
											to="/"
											className="nav-link"
										>
											<Icon2 />
											<span className="ps-1">
												Đã lưu
											</span>
										</Link>
									</NavItem>
									<NavItem>
										<Link
											to="/"
											className="nav-link"
										>
											<Icon3 />
											<span className="ps-1">
												Đăt chỗ của tôi
											</span>
										</Link>
									</NavItem>
									<NavItem className="d-flex align-items-center">
										<UncontrolledDropdown>
											<DropdownToggle caret>
												<img
													src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f8c046147fb32a009ba122f35312aa.svg"
													alt=""
												/>
												VN
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem>
													<img
														src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f8c046147fb32a009ba122f35312aa.svg"
														alt=""
													/>
													VN
												</DropdownItem>
												<DropdownItem>
													<img
														className="px-1"
														width="25px"
														src="https://toppng.com/uploads/preview/uk-round-flag-11563596900h0bvrmnyb2.png"
														alt=""
													/>
													EN
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
									</NavItem>
									{!localStorage.getItem(
										"access_token"
									) && (
										<>
											<NavItem>
												<Link
													to="/login"
													className="nav-link"
												>
													<span className="ps-1">
														Đăng nhập
													</span>
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/register"
													className="nav-link"
												>
													<span className="ps-1">
														Đăng ký
													</span>
												</Link>
											</NavItem>
										</>
									)}
									{localStorage.getItem(
										"access_token"
									) && (
										<NavItem>
											<UncontrolledDropdown>
												<DropdownToggle
													caret
												>
													{user?.name}
												</DropdownToggle>
												<DropdownMenu>
													<Link
														className="text-decoration-none dropdown-item"
														to="/user/profile"
													>
														View
													</Link>
													<DropdownItem
														onClick={
															onLogOutClick
														}
													>
														Logout
													</DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</NavItem>
									)}
								</Nav>
							</Collapse>
						</Navbar>
					</div>
					<div className="bg_nav_2 d-flex ">
						<div className="m-auto d-flex ">
							{menu.map((dropdown, index) => {
								return (
									<UncontrolledDropdown
										key={index}
										className="px-4 py-1"
									>
										<DropdownToggle caret>
											{dropdown.title}
										</DropdownToggle>
										<DropdownMenu className="">
											{dropdown.children.map(
												(
													dropdownItem,
													index
												) => {
													return (
														<DropdownItem
															key={
																index
															}
															href={
																dropdownItem.href
															}
														>
															<img
																src={
																	dropdownItem.icon
																}
																alt=""
																className="me-1"
															/>
															{
																dropdownItem.title
															}
														</DropdownItem>
													);
												}
											)}
										</DropdownMenu>
									</UncontrolledDropdown>
								);
							})}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default NavbarApp;

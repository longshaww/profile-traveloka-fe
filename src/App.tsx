import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layouts/layout";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />}></Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Route>
		</Routes>
	);
}

export default App;

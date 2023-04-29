import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav";
import RightNav from "../Shared/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar";

const Main = () => {
	return (
		<div>
			<Header />
			<NavigationBar />
			<Container>
				<Row>
					<Col lg={3}>
						<LeftNav />
					</Col>
					<Col lg={6}>
						<Outlet />
					</Col>
					<Col lg={3}>
						<RightNav />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Main;

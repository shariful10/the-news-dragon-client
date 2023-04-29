import React from "react";
import Header from "../Shared/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import LeftNav from "../Shared/LeftNav";
import RightNav from "../Shared/RightNav";

const NewsLayout = () => {
	return (
		<div>
			<Header />
			<Container>
				<Row>
					<Col lg={9}>
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

export default NewsLayout;

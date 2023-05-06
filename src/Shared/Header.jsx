import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {

	return (
		<Container className="mt-4">
			<div className="text-center">
				<Link to="/category/0">
					<img src={logo} alt="" />
				</Link>
				<p className="text-secondary">
					<small>Journalism Without Fear or Favor</small>
				</p>
				<p>{moment().format("dddd, MMMM D, YYYY")}</p>
			</div>
			<div className="d-flex align-items-center bg-light px-2">
				<Button variant="danger rounded-0">Latest</Button>
				<Marquee className="text-danger mt-3 bg-light" speed={150}>
					<div className="d-flex gap-5">
						<p>
							Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
							Germany vs Spain as...
						</p>
						<p>
							I can be a React component, multiple React components, or just some
							text.
						</p>
					</div>
				</Marquee>
			</div>
		</Container>
	);
};

export default Header;

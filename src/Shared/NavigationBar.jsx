import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavigationBar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.than((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Navbar collapseOnSelect expand="lg" bg="white" variant="light">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto">
							<Link to="/category/0">Home</Link>
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link href="#career">Career</Nav.Link>
						</Nav>
						<Nav>
							{user && <FaUserCircle style={{ fontSize: "2rem" }} />}
							{user ? (
								<Button onClick={handleLogOut} variant="secondary">
									Log Out
								</Button>
							) : (
								<Link to="/login">
									<Button variant="secondary">Login</Button>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;

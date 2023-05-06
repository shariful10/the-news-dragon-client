import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const [showPass, setShowPass] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	useTitle('Login');
	console.log(location);
	const from = location.state?.from?.pathname || '/category/0'

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(email, password)
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container className="w-25 mx-auto">
			<h3>Please Login</h3>
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" name="email" placeholder="Enter email" required />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label className="d-flex">
						<span className="flex-grow-1">Password</span>
						<span onClick={() => setShowPass(!showPass)}>
							{showPass ? <FaEyeSlash /> : <FaEye />}
						</span>
					</Form.Label>
					<Form.Control
						type={showPass ? "text" : "password"}
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
				<br />
				<Form.Text className="text-secondary">
					Don't have an account? <Link to="/register">Register</Link>
				</Form.Text>
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="text-danger"></Form.Text>
			</Form>
		</Container>
	);
};

export default Login;

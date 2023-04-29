import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [showPass, setShowPass] = useState(false);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const url = form.url.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, url, email, password);
		createUser(email, password)
			.then((res) => {
				const createdUser = res.user;
				console.log(createUser);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container className="w-25 mx-auto">
			<h3>Please Register</h3>
			<Form onSubmit={handleRegister}>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" name="name" placeholder="Your Name" required />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicUrl">
					<Form.Label>Photo URL</Form.Label>
					<Form.Control type="text" name="url" placeholder="Photo URL" required />
				</Form.Group>
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
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						type="checkbox"
						name="accept"
						label="Accept Terms and Conditions"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Register
				</Button>
				<br />
				<Form.Text className="text-secondary">
					Already have an account? <Link to="/login">Login</Link>
				</Form.Text>
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="text-danger"></Form.Text>
			</Form>
		</Container>
	);
};

export default Register;

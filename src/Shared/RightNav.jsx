import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "./QZone";
import bg from './../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
	return (
		<div>
			<h4 className="mt-4">Login with</h4>
			<Button variant="outline-primary" className="mb-2 mt-3 text-center">
				<FaGoogle /> Login with Google
			</Button>
			<Button variant="outline-dark" className="mb-3 text-center">
				<FaGithub /> Login with Github
			</Button>
			<div>
				<h4 className="mt-4">Find Us On</h4>
				<ListGroup>
					<ListGroup.Item><FaFacebookF className="text-primary" /> Facebook</ListGroup.Item>
					<ListGroup.Item><FaTwitter className="text-info" /> Twitter</ListGroup.Item>
					<ListGroup.Item><FaInstagram className="text-danger" /> Instagram</ListGroup.Item>
				</ListGroup>
			</div>
            <QZone />
            <div className="text-center text-white news-details">
                <h2>Create an Amazing Newspaper</h2>
                <p className="mt-4 mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger py-3 px-4 rounded-0">Learn More</Button>
            </div>
		</div>
	);
};

export default RightNav;

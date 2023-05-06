import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "./EditorsInsights/EditorsInsights";
import useTitle from "../../hooks/useTitle";

const News = () => {
	const news = useLoaderData();
	const { _id, title, details, image_url, author, rating, total_view, category_id } = news;
	useTitle('News Details');

	return (
		<div>
			<Card>
				<Card.Img variant="top" src={image_url} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{details}</Card.Text>
					<Link to={`/category/${category_id}`}>
						<Button variant="danger">
							<FaArrowLeft /> All news in this category
						</Button>
					</Link>
				</Card.Body>
			</Card>
			<EditorsInsights />
		</div>
	);
};

export default News;

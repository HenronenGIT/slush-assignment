import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import blogService from '../services/blogs'

type BlogFormValues = {
	title: string;
	description: string;
	content: string;
};


const BlogForm: React.FC = () => {
	const navigate = useNavigate()
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			const { title, description, content } = event.currentTarget.elements as unknown as BlogFormValues;
			//TODO Notification
			await blogService.create({ title, description, content })
			navigate('/blogs')
			event.currentTarget.reset();
		} catch (error) {
			console.log('Error')
		}
	};

	return (
		<div className="container my-5">
			<Form onSubmit={handleSubmit}>
				<h1 className="text-center mb-5">Create Post</h1>

				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Title" />
				</Form.Group>

				<Form.Group controlId="description">
					<Form.Label>Description</Form.Label>
					<Form.Control placeholder="Description" />
				</Form.Group>

				<Form.Group controlId="content">
					<Form.Label>Content</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>

				<div className="text-center">
					<Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default BlogForm;
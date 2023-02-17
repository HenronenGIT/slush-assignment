import React from 'react';
import { Form, Button } from 'react-bootstrap';
import blogService from '../services/blogs'


// const BlogForm = () => {
const BlogForm: React.FC = () => {
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const form = event.target;

			const title = form.title.value;
			const description = form.description.value;
			const content = form.content.value;
			await blogService.create({ title, description, content }) //! notification could be added
			form.reset();

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
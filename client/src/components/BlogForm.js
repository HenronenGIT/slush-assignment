// import React from "react";
// import { Form, Button } from 'react-bootstrap';


// const BlogForm = ({ createBlog }) => {

// 	const addBlog = (event) => {
// 		event.preventDefault();
// 		const title = event.target.title.value
// 		const content = event.target.content.value
// 		const description = event.target.description.value

// 		createBlog({
// 			title: title,
// 			description: description,
// 			content: content,
// 		});

// 		event.target.title.value = ''
// 		event.target.content.value = ''
// 		event.target.description.value = ''
// 	};

// 	return (
// 		<Form align="center" onSubmit={addBlog}>
// 			<h1>Create Post</h1>

// 			<Form.Group className="position-relative" controlId="title">
// 				<Form.Label>Title</Form.Label>
// 				<Form.Control className="text-center mx-auto" type="text" placeholder="Title" style={{ width: "50%" }} />
// 			</Form.Group>

// 			<Form.Group className="position-relative" controlId="description">
// 				<Form.Label>Description</Form.Label>
// 				<Form.Control className="text-center mx-auto" style={{ width: "50%" }} placeholder="Description" />
// 			</Form.Group>

// 			<Form.Group className="position-relative" controlId="content">
// 				<Form.Label>Content</Form.Label>
// 				<Form.Control className="text-center mx-auto" as="textarea" rows={3} style={{ width: "80%" }} />
// 			</Form.Group>


// 			<Button variant="outline-primary" as="input" type="submit" value="Submit" />{' '}
// 		</Form>
// 	);
// };

// export default BlogForm;

import { Form, Button, Col } from 'react-bootstrap';

const BlogForm = ({ createBlog }) => {

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		const title = form.title.value;
		const description = form.description.value;
		const content = form.content.value;
		createBlog({title, description, content});
		form.reset();
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
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default BlogForm;
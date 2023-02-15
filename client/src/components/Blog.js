import React from 'react'
import { Card } from 'react-bootstrap';

const Blog = ({ blog }) => {
	if (blog === undefined) {
		return null
	}
	console.log(blog)
	// console.log(blog)
	return (
		<div>
			<Card key={blog.id}>
				<Card.Body className="blog-body">
					<Card.Title>{blog.title}</Card.Title>
					{blog.description}
				</Card.Body>
			</Card>
		</div>
	)
}

export default Blog
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { BlogCard } from './index'
import '../styles.css';

const Blogs = ({ blogs }) => {
	return (
		<Container>
			<Row className="justify-content-center">
				<h1 className="post-heading">POSTS</h1>
				{blogs.map(blog =>
					<BlogCard key={blog.id} blog={blog} />
				)}
			</Row>
		</Container>
	);
}

export default Blogs
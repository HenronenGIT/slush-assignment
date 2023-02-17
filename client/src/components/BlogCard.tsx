import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface BlogCardProps {
	blog: {
		id: number;
		title: string;
		description: string;
		created_at: string;
	};
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
	return (
		<div className="container mt-3">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{blog.title}</h2>
					<p className="card-text">{blog.description}</p>
					<Link to={`blog/${blog.id}`}>
						<Button>Read more</Button>
					</Link>
					{/* <Button as={Link} to={`/blog/${blog.id}`}> */}
					{/* Read More */}
					{/* </Button> */}
				</div>
				<div className="card-footer text-muted">
					Created on: {blog.created_at}
				</div>
			</div>
		</div>
	)
}

export default BlogCard

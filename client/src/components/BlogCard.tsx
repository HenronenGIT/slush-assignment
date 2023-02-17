import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
	blog: {
		id: number;
		title: string;
		description: string;
		created_at: string;
	};
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {

	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/blogs/${blog.id}`)
	}

	return (
		<div className="container mt-3">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{blog.title}</h2>
					<p className="card-text">{blog.description}</p>
					<Button onClick={handleNavigate}>Read more</Button>
				</div>
				<div className="card-footer text-muted">
					Created on: {blog.created_at}
				</div>
			</div>
		</div >
	)
}

export default BlogCard

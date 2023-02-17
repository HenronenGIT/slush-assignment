import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import blogService from '../services/blogs'

interface Blog {
	id: number;
	title: string;
	content: string;
	created_at: string;
}

// const BlogPost = () => {
const BlogPost: React.FC = () => {
	// const [blog, setBlog] = useState<Blog>({({ id: 0, title: '', content: '', created_at: '' });
	// const { id } = useParams();
	const [blog, setBlog] = useState<Blog>({ id: 0, title: '', content: '', created_at: '' });
	const { id } = useParams<{ id: string }>();
	useEffect(() => {
		const fetchOneBlog = async () => {
			try {
				const fetchedBlog = await blogService.getOne(id)
				setBlog(fetchedBlog)
			}
			catch (error) {
				console.log(error)
			}
		}
		fetchOneBlog();
	}, [id])

	return (
		<div className="container mt-3">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{blog.title}</h2>
					<p className="card-text">{blog.content}</p>
					<Button>Delete</Button>
				</div>
				<div className="card-footer text-muted">
					Created on: {blog.created_at}
				</div>
			</div>
		</div>
	);
};


export default BlogPost

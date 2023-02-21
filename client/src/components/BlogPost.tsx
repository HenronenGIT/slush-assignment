import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import blogService from '../services/blogs'

// import { blogObject } from '../ts/interfaces/app_interfaces'

const BlogPost: React.FC = () => {
	// const [blog, setBlog] = useState<blogObject>({ id: 0, title: '', description: '', content: '', created_at: '' });
	const [blog, setBlog] = useState({ id: 0, title: '', description: '', content: '', created_at: '' });
	const { id }: { id?: string } = useParams();

	const navigate = useNavigate()

	useEffect(() => {
		const fetchOneBlog = async () => {
			try {
				const fetchedBlog = await blogService.getOne(id)
				setBlog(fetchedBlog)
				if (fetchedBlog) {
					setBlog(fetchedBlog)
				} else {
					navigate('/not_found')
				}
			}
			catch (error) {
				console.log(error)
			}
		}
		fetchOneBlog();
	}, [id, navigate])

	const handleDeleteBlog = async () => {
		try {
			//TODO Notification
			await blogService.remove(id)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="container mt-3">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{blog.title}</h2>
					<p className="card-text">{blog.content}</p>
					<Button variant="danger" onClick={handleDeleteBlog}>
						Delete Blog
					</Button>
				</div>
				<div className="card-footer text-muted">
					Created on: {blog.created_at}
				</div>
			</div>
		</div>
	);
};


export default BlogPost

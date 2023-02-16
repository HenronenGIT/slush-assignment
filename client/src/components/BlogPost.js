import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import blogService from '../services/blogs'

const BlogPost = () => {
	const [blog, setBlog] = useState({})
	const { id } = useParams();
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

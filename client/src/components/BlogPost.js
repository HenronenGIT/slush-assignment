import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getOne from '../services/blogs'

// const BlogPost = ({ blogs }) => {
const BlogPost = () => {
	const [blog, setBlog] = useState({})
	const { idToFind } = useParams();

	// useEffect(() => {
	// 	const fetchOne = async () => {

	// 		try {
	// 			const response = await getOne(idToFind)
	// 			console.log(response)
	// 			// setBlog(response)

	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// 	fetchOne();
	// }, [])

	// if (!blogs) {
	// return "temp"
	// // }
	// const blog = getOne(idToFind)
	console.log(blog)
	return (
		<div className="container mt-3">
			{/* <div className="card">
				<div className="card-body">
					<h2 className="card-title">{blog.title}</h2>
					<p className="card-text">{blog.content}</p>
				</div>
				<div className="card-footer text-muted">
					Created on: {blog.created_at}
				</div>
			</div> */}
		</div>
	);
};


export default BlogPost

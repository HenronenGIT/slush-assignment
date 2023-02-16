import { useState, useEffect } from 'react';
import blogService from '../services/blogs'
import { Container, Row } from 'react-bootstrap';
import { BlogCard } from './index'
import '../styles.css';


// const Blogs = ({ blogs }) => {
const Blogs = () => {
	const [blogs, setBlogs] = useState([])
	useEffect(() => {
		const fetchAll = async () => {
			try {
				const fetchedBlogs = await blogService.getAll()
				setBlogs(fetchedBlogs)
			} catch (error) {
				console.log("Error when tried to fetch newest blog")
			}
		}
		fetchAll();
	}, [])

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
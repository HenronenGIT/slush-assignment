import { useState, useEffect } from 'react';
import { BlogCard } from '../components/index.js'
import blogService from '../services/blogs'

// import { Link } from 'react-router-dom';


const Home = ({ blogs }) => {
	const [newestBlog, setNewestBlog] = useState({})

	useEffect(() => {
		const fetchNewestBlog = async () => {
			try {
				const fetchedBlog = await blogService.getNewest()
				setNewestBlog(fetchedBlog)
			} catch (error) {
				console.log("Error when tried to fetch newest blog")
			}
		}
		fetchNewestBlog();
	}, [])

	return (
		<div className="container mt-5">
			<h1 className="mb-5">Most Recent Post</h1>
			{/* <Link to={`/blog/${blog.id}`} className="text-decoration-none">
				<BlogPost blog={blog}></BlogPost>
			</Link> */}
			<BlogCard blog={newestBlog}></BlogCard>
			{/* <BlogPost blog={blog}></BlogPost> */}
		</div>
	);
};

export default Home

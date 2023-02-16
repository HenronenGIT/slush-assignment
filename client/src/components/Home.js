import { useState, useEffect } from 'react';
import { BlogCard } from '../components/index.js'
import blogService from '../services/blogs'

const Home = () => {
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
			<div className="card border-1 shadow">
				<div className="card-body">
					<h1 className="post-heading text-center mb-5">Most Recent Post</h1>
					<BlogCard blog={newestBlog}></BlogCard>
				</div>
			</div>
		</div>
	);
};

export default Home

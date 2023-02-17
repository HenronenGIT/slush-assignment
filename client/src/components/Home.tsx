import React from 'react';
import { useState, useEffect } from 'react';
import blogService from '../services/blogs'
import { BlogCard, BlogCardProps } from '../components/index'

// const Home = () => {
const Home: React.FC = () => {
	// const [newestBlog, setNewestBlog] = useState<BlogCardProps>({});

	const [newestBlog, setNewestBlog] = useState({
		id: 0,
		title: '',
		description: '',
		created_at: ''
	})

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

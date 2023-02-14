import { useState, useEffect } from 'react'
import Blog from './components/Blogs'
import axios from 'axios'

const App = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await axios.get('/api/blogs')
				setBlogs(response.data);
			} catch (error) {
				console.log("Error when trying to fetch blogs:", error);
			}
		};
		fetchBlogs()
	}, [])

	// console.log(blogs)
	return (
		<div>
			<Blog blogs={blogs}></Blog>
		</div>
	)
}

export default App
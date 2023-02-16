import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import {
	Home,
	Blogs,
	BlogForm,
	Navigation,
	BlogPost
} from './components/index.js'
import blogService from './services/blogs'

const App = () => {
	const [blogs, setBlogs] = useState([null])

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await axios.get('/api/blogs')
				// const response = await blogService.getAll()

				setBlogs(response.data);
			} catch (error) {
				console.log("Error when trying to fetch blogs:", error);
			}
		};
		fetchBlogs()
	}, [])

	const addBlog = async (blogObject) => {
		try {
			console.log(blogObject)
			const createdBlog = blogService.create(blogObject)
			setBlogs(blogs.concat(createdBlog))
			//!notification
		} catch (error) {
			console.log("Error when trying to create new blog!")
		}
	}

	// const findBlogById = (id, array) => (blogs.find(blog => blog.id === id))
	// const blog = blogs.find(blog => blog.id === id);
	// console.log(blog)
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home blogs={blogs} />} />
				<Route path='/posts' element={<Blogs blogs={blogs} />} />
				<Route path='/create' element={<BlogForm createBlog={addBlog} />} />
				{/* <Route path='/blog/:id' element={<BlogPost blogs={blogs} />} /> */}
				<Route path='/blog/:id' element={<BlogPost/>} />

			</Routes>
		</div>
	)
}

export default App
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Blog from './components/Blogs'
import Navigation from './components/Navigation'
import BlogForm from './components/BlogForm'
import Home from './components/Home'
import blogService from './services/blogs'

// import Nav from 'react-bootstrap/Nav';

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

	const addBlog = async (blogObject) => {
		try {
			const createdBlog = blogService.create(blogObject)
			setBlogs(blogs.concat(createdBlog))
			//!notification
		} catch (error) {
			console.log("Error when trying to create new blog!")
		}
	}

	const lastElement = (array) => (array[array.length - 1])

	return (
		<div>
			<Navigation />
			<Routes>
				{/* <Route path='/' element={<Home blog={blogs[blogs.length - 1]} />} /> */}

				<Route path='/' element={<Home blog={lastElement(blogs)} />} />
				<Route path='/posts' element={<Blog blogs={blogs} />} />
				<Route path='/create' element={<BlogForm createBlog={addBlog} />} />
				{/* <Route path='/create' element={<Blog blogs={blogs} />} /> */}
				{/* <Blog blogs={blogs}></Blog> */}
				{/* <Route exact path="/blogs" component={<Blog/>} /> */}
			</Routes>
		</div>
	)
}

export default App
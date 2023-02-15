import React from 'react'
import Blog from './Blog'

const Home = ({blog}) => {
	console.log(blog)
	return (
		<div align="center">
			<h1 >Most recent post</h1>
			<Blog blog={blog}></Blog>

		</div>
	)
}

export default Home
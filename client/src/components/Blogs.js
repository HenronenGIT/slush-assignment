import React from 'react'

const Blogs = ({ blogs }) => {
	return (
		<div>
			<h1>Blogs</h1>
			{blogs.map(blog =>
				<p key={blog.id}>
					{blog.title}
				</p>
			)}
		</div>
	)
}

export default Blogs
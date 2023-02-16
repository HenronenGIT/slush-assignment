// import { BlogPost } from '../components/index.js'
import {BlogCard} from '../components/index.js'
// import { Link } from 'react-router-dom';


const Home = ({ blogs }) => {

	const lastElement = (array) => {
		const index = array[array.length - 1]
		return (index)
	}

	const blog = lastElement(blogs);
	console.log("blog", blog)
	if (!blog) {
		return null
	}
	return (
		<div className="container mt-5">
			<h1 className="mb-5">Most Recent Post</h1>
			{/* <Link to={`/blog/${blog.id}`} className="text-decoration-none">
				<BlogPost blog={blog}></BlogPost>
			</Link> */}
			<BlogCard blog={blog}></BlogCard>
			{/* <BlogPost blog={blog}></BlogPost> */}
		</div>
	);
};

export default Home

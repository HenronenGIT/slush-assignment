import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog }) => {
	return (
		<div className="container mt-3">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{blog.title}</h2>
					<p className="card-text">{blog.description}</p>
					<Button as={Link} to={`/blog/${blog.id}`}>Read More</Button>
				</div>
				<div className="card-footer text-muted">
					Created on: {blog.created_at}
				</div>
			</div>
		</div>
	)
}

export default BlogCard
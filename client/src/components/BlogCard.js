import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog }) => {
	if (blog === undefined) {
		return null
	}
	return (
		<div className="container mt-3">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{blog.title}</h2>
					<p className="card-text">{blog.content}</p>
					<Button as={Link} to={`/blog/${blog.id}`}>Read More</Button>
				</div>
				<div className="card-footer text-muted">
					Created on: {blog.created_at}
				</div>
			</div>
		</div>
		// <div>
		// 	<Link to={`/blog/${blog.id}`}>
		// 		<Card key={blog.id}>
		// 			<Card.Body className="blog-body">
		// 				<Card.Title>{blog.title}</Card.Title>
		// 				{blog.description}
		// 			</Card.Body>
		// 		</Card>
		// 	</Link>
		// </div>
	)
}

export default BlogCard
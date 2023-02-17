import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div >
			<h1>Oops! You seem to be lost.</h1>
			<p>Link to home page:</p>
			<Link to='/'>Home</Link>
		</div>
	)
}

export default NotFound

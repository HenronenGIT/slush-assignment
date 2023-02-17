import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

// const Navigation = () => {
const Navigation: React.FC = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Navbar.Brand as={Link} to="/" style={{ marginLeft: "20px" }}>
				Henri Maronen
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-nav" />
			<Navbar.Collapse id="navbar-nav">
				<Nav className="ml-auto">
					<Nav.Item >
						<Nav.Link as={Link} to="/" className="nav-link" >
							Home
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to="/blogs" className="nav-link">
							Posts
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to="/create" className="nav-link">
							Create New
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation
import React, { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import blogService from '../services/blogs'
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { BlogCard } from './index'
import { blogObject } from '../ts/interfaces/app_interfaces'

const BlogGallery: React.FC = () => {
	const [blogs, setBlogs] = useState<any>([])
	const [searchTerm, setSearchTerm] = useState<string>('');

	useEffect(() => {
		fetchAll();
	}, [])

	const fetchAll = async () => {
		try {
			const fetchedBlogs = await blogService.getAll()
			fetchedBlogs.sort((a: blogObject, b: blogObject) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
			setBlogs(fetchedBlogs)

		} catch (error) {
			console.log("Error when tried to fetch newest blog")
		}
	}

	const filteredBlogs = blogs.filter((blog: blogObject) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement
		setSearchTerm(target.value);
	};

	return (
		<Container>
			<Row className="justify-content-center">
				<Col xs={12} md={10} lg={8}>
					<h1 className="post-heading text-center mb-5">Recent Posts</h1>
					<Form className="mb-4">
						<FormControl type="text" placeholder="Search by title" className="mr-sm-2" value={searchTerm} onChange={handleSearch} />
					</Form>
					<Row className="justify-content-center">
						{filteredBlogs.map((blog: blogObject) => (
							<Col xs={12} md={6} className="mb-4" key={blog.id}>
								<BlogCard blog={blog} />
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default BlogGallery
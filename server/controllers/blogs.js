const express = require('express')
const router = express.Router()

const { pool } = require('../database/index')

//* GET all blogs
router.get('/', async (req, res) => {
	try {
		const blogs = await pool.query(`SELECT * FROM blogs`)
		res.status(200).send(blogs.rows)
	}
	catch (e) {
		res.status(404).send({ 'error': 'error' })
	}
})

//* GET single blog
router.get('/:id', async (req, res) => {
	const { id } = req.params

	try {
		const fetchedBlog = await pool.query(`
			SELECT *
			FROM blogs
			WHERE id = ${id}
			LIMIT 1;
		`)
		res.status(200).send(fetchedBlog.rows)
	}
	catch (error) {
		res.status(500).send({
			message: `Error when trying to fetch blog with an id ${id}`,
			error
		});
	}
})

//* POST single blog
router.post('/', async (req, res) => {
	const { title, content, author, url } = req.body;

	try {
		const insertedBlog = await pool.query(`
			INSERT INTO blogs (title, content, author, url)
			VALUES ('${title}', '${content}', '${author}', '${url}')
		`);

		res.status(200).send({
			message: 'Blog successfully posted',
			blog: {
				id: insertedBlog.insertId,
				title,
				content,
				author,
				url
			}
		});
	} catch (error) {
		res.status(500).send({
			message: 'Error posting a blog',
			error
		});
	}
});

//* DELETE single blog
router.delete('/:id', async (req, res) => {
	const { id } = req.params

	try {
		const deletedBlog = await pool.query(`
			DELETE FROM blogs
			WHERE id = ${id};
		`)
		if (deletedBlog.rowCount === 0) {
			res.status(404).send({
				message: `Did not find blog with an id of ${id}`
			});
		} else {
			res.status(204).send({ message: `Deleted rows ${deletedBlog.rowCount}` }); //! Why not sending message
		}
	} catch (error) {
		res.status(404).send({
			message: 'Error when when trying to delete a blog',
			error
		});
	}
})

// PUT edit single blog
router.put('/:id', (req, res) => {

})

module.exports = router
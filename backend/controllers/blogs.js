const express = require('express')
const router = express.Router()

// Get all blogs
router.get('/', (req, res) => {
	res.send("hello world")
	// const query = 'SELECT * FROM blogs;'
})

// Get single blog
router.get('/:id', (req, res) => {

})

// DELETE single blog
router.delete('/:id', (req, res) => {

})

// PUT edit single blog
router.put('/:id', (req, res) => {

})

module.exports = router
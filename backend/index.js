const express = require('express')
const app = express()

require('dotenv').config()

const { connectToDatabase, insertMockData } = require('./util/db')

const blogsRouter = require('./controllers/blogs')

app.use('/api/blogs', blogsRouter)

const start = async () => {
	const port = process.env.PORT || 3001
	await connectToDatabase()
	// await insertMockData()
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
}

start()
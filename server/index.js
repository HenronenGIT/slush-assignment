const express = require('express')
const app = express()
const { connectToDatabase, initializeDatabase } = require('./database/index')

require('dotenv').config()
app.use(express.json())

const blogsRouter = require('./controllers/blogs')

app.use('/api/blogs', blogsRouter)

const start = async () => {
	const port = process.env.PORT || 3001
	await connectToDatabase()
	await initializeDatabase()
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
}

start()
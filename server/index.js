const express = require('express')
const app = express()
const { connectToDatabase, initializeDatabase } = require('./database/index')

require('dotenv').config()
app.use(express.json())
app.use(express.static('build'))

const blogsRouter = require('./controllers/blogs')

app.use('/api/blogs', blogsRouter)

const start = async () => {
	const PORT = process.env.APP_PORT || 3001
	await connectToDatabase()
	await initializeDatabase()
	app.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
	});
}

start()
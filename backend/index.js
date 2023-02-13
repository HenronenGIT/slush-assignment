const express = require('express')
const app = express()
require('dotenv').config()

const { connectToDatabase } = require('./util/db')


const start = async () => {
	const port = process.env.PORT || 3001
	await connectToDatabase()
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
}

start()
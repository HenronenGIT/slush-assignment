// const { Client } = require('pg')
const { Pool } = require('pg')
// const { sql } = require('pg')

const { HOST, DATABASE_USER, PORT, DATABASE_PASSWORD, DATABASE_URL } = require('../util/config')

const pool = new Pool({
	host: HOST,
	port: PORT,

	user: DATABASE_USER,
	password: DATABASE_PASSWORD,
	connectionString: DATABASE_URL,
})

const connectToDatabase = async () => {
	pool.connect((err) => {
		if (err) {
			console.log('failed to connect to database', err)
		} else {
			console.log("Connected to database")
		}
	})
}

const initializeDatabase = async () => {

	// blogs table
	pool.query(`
	CREATE TABLE IF NOT EXISTS blogs (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255) NOT NULL,
		content TEXT NOT NULL,
		description VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT NOW()
	  );`)
}

module.exports = { connectToDatabase, initializeDatabase, pool }

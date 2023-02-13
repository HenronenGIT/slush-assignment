// import postgres from 'postgres'

const { HOST, DATABASE_USER, PORT, DATABASE_PASSWORD, DATABASE_URL } = require('./config')

const { Client } = require('pg')

const connectToDatabase = async () => {

	const client = new Client({
		host: HOST,
		port: PORT,

		user: DATABASE_USER,
		password: DATABASE_PASSWORD,
		connectionString: DATABASE_URL,
	})
	
	client.connect((err) => {
		if (err) {
			console.log('failed to connect to database', err)
		} else {
			console.log("Connected to database")
		}
	})
}



// const sql = postgres({})
module.exports = { connectToDatabase }
// 
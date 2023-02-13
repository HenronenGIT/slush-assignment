// import postgres from 'postgres'

const { Client } = require('pg')

const { HOST, DATABASE_USER, PORT, DATABASE_PASSWORD, DATABASE_URL } = require('./config')

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

// const insertMockData = async () => {
// 	const query = `
// 	INSERT INTO blogs (username, email)
// 	VALUES ('testuser1', 'testuser1@example.com'),
// 		   ('testuser2', 'testuser2@example.com');
//   `
// }

module.exports = { connectToDatabase }
//
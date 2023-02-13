// import postgres from 'postgres'

// const { DATABASE_URL, PORT, DATABASE_PASSWORD, HOST_NAME } = require('./config')

const { Client } = require('pg')

// const connect = async () => {

// 	const client = new Client({ connectionString: DATABASE_URL })

// 	await client.connect()
// 	const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// 	console.log(res.rows[0].message) // Hello world!
// 	await client.end()
// }
// connect()

const client = new Client({
	host:"127.0.0.1",
	user:"postgres",
	port: 5432,
	connectionString:'postgres://postgres:QjXsLbDP1lCizFI@127.0.0.1:5432',
	password:'QjXsLbDP1lCizFI',
})


client.connect((err) => {
	if (err) {
		console.log('failed to connect to database', err)
	} else {
		console.log("Connected to database")
	}
})


// const sql = postgres({})
// module.exports = { connectToDatabase }
// 
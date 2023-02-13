require('dotenv').config()

module.exports = {
	HOST: '127.0.0.1',
	PORT: process.env.PORT,

	DATABASE_USER: process.env.DATABASE_URL,
	DATABASE_URL: process.env.DATABASE_URL,
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
	
	HOST_NAME: process.env.HOST_NAME
}
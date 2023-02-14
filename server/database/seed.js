const fs = require('fs');

const { connectToDatabase } = require('./index')
const { pool } = require('../database/index')


const executeSqlFile = async (filePath) => {
	try {
		const sql = fs.readFileSync(filePath).toString();
		await pool.query(sql);
		console.log(`Executed SQL file: ${filePath}`);
	} catch (error) {
		console.error(`Error executing SQL file: ${filePath}\n`, error);
	}
	//  finally {
	// pool.end();
	// }
};

connectToDatabase()
	.then(() => {
		executeSqlFile('./database/blog_seeds.sql');
	})
	.catch((error) => {
		console.error(error);
	});
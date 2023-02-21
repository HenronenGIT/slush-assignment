import axios from 'axios'
// import { blogObject } from '../ts/interfaces/app_interfaces'

const baseUrl = '/api/blogs'

interface blogObject {
	title: string,
	description: string,
	content: string,
}

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getOne = async (blogId?: string) => {
	try {
		const response = await axios.get(`${baseUrl}/${blogId}`);
		return response.data
	} catch (error) {
		console.error(error);
	}
}

const getNewest = async () => {
	try {
		const response = await axios.get(`${baseUrl}/newest`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

const create = async (newObject: blogObject) => {
	console.log(newObject)
	const response = await axios.post(baseUrl, newObject)
	return response.data
}

const remove = async (id?: string) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	const response = await request
	return response.data
}

const services = {
	getAll,
	getOne,
	create,
	remove,
	getNewest
}

export default services

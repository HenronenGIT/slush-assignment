import { Routes, Route } from 'react-router-dom';
import {
	Home,
	Blogs,
	BlogForm,
	Navigation,
	BlogPost
} from './components/index.js'

const App = () => {

	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts' element={<Blogs />} />
				<Route path='/create' element={<BlogForm/>} />
				<Route path='/blog/:id' element={<BlogPost />} />
			</Routes>
		</div>
	)
}

export default App
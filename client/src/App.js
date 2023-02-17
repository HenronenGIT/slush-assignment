import { Routes, Route } from 'react-router-dom';
import {
	Home,
	BlogGallery,
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
				<Route path='/posts' element={<BlogGallery />} />
				<Route path='/create' element={<BlogForm/>} />
				<Route path='/posts/blog/:id' element={<BlogPost />} />
			</Routes>
		</div>
	)
}

export default App
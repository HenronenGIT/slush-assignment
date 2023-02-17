import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Home,
	BlogGallery,
	BlogForm,
	Navigation,
	BlogPost
} from './components/index'

const App: React.FC = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blogs' element={<BlogGallery />} />
				<Route path='/create' element={<BlogForm />} />
				<Route path='/blog/:id' element={<BlogPost />} />
			</Routes>
		</div>
	)
}

export default App

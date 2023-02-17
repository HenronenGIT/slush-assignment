import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Home,
	BlogGallery,
	BlogForm,
	Navigation,
	BlogPost,
	NotFound
} from './components/index'

const App: React.FC = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<Home />} />
				<Route path='/blogs' element={<BlogGallery />} />
				<Route path='/create' element={<BlogForm />} />
				<Route path='/blogs/:id' element={<BlogPost />} />
			</Routes>
		</div>
	)
}

export default App

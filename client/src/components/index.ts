import Home from './Home';
import BlogCard from './BlogCard';
import BlogGallery from './BlogGallery';
import BlogForm from './BlogForm';
import Navigation from './Navigation';
import BlogPost from './BlogPost';
import NotFound from './NotFound'


export type BlogCardProps = {
	blog: {
		id: number;
		title: string;
		description: string;
		created_at: string;
	};
};


export { Home, BlogCard, BlogGallery, BlogForm, Navigation, BlogPost, NotFound };

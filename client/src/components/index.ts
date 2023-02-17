// import Home from './Home'

// import BlogCard from './BlogCard'
// import Blogs from './Blogs'
// import BlogForm from './BlogForm'
// import Navigation from './Navigation'
// import BlogPost from './BlogPost'

// export { Home, BlogCard, Blogs, BlogForm, Navigation, BlogPost};

import Home from './Home';
import BlogCard from './BlogCard';
import Blogs from './Blogs';
import BlogForm from './BlogForm';
import Navigation from './Navigation';
import BlogPost from './BlogPost';


export type BlogCardProps = {
	blog: {
		id: number;
		title: string;
		description: string;
		created_at: string;
	};
};


export { Home, BlogCard, Blogs, BlogForm, Navigation, BlogPost };

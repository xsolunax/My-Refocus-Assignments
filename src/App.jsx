import postsData from './posts.json';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import BlogLayout from './layouts/BlogLayout.jsx';
import { Posts, Create } from './pages/pages.js';
import PostPage from './pages/PostPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<BlogLayout />}>
			<Route path="post/" element={<Posts />} />
			<Route path="post/:id" element={<PostPage posts={postsData} />} />
			<Route path="post/create" element={<Create />} />
		</Route>,
	),
);

function App() {
	/*
    TODO:
    1. Install React router 
    2. Create several routes (and their corresponding React components): 
       main page (posts list), post page (/post/:id), new post page (/post/create)
    3. All the posts data will be stored in the state (hook above). 
       In order to manipulate this data (create new posts, etc), you need to 
       pass the setPosts function down the components tree.
       You can do it using React Context to avoid props drilling
       Note: this approach of storing all the data in the top-level component is not optimal,
       but for now (until we learn state management tools (Redux, etc.)) it's ok to use it like that. 
    4. For styling you can plain css files, or you can install and use SASS/SCSS - it's up to you.
    5. Additional (optional) task: in order to persist the posts data between page reloads, try to use 
       browser's localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
       Note: It's generally not a good idea (usually data comes from backend API and is stored on the server), 
       but until we learn how to interact with the API, for learning purposes - it's fine.

    Notes:
    1. PostImage is a pre-built component that uploads and returns an image URL. {addImageSuccessful} is a prop from the component that is used to get the image file URL that you can attach to the post. No need to change any of the code of the component just use the function to get the image URL.
  */


	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
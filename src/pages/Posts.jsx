import { PostsList } from '../components/PostsList';
import { useState, useEffect } from 'react';
import postsData from '../posts.json';

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Retrieve posts from localStorage
		const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

		// Merge the posts from postsData and storedPosts
		const mergedPosts = [...postsData, ...storedPosts];

		setPosts(mergedPosts);
	}, []);

	return (
		<div className="posts-container">
			<PostsList posts={posts} />
		</div>
	);
}

export default Posts;

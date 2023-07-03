import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PostImage } from '../components/PostImage';

function Create() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [buttonState, setButtonState] = useState('');
	const [imageLink, setImageLink] = useState('');
	const postsData = JSON.parse(localStorage.getItem('posts'));

	function handleButtonState() {
		if (title !== '' && text !== '' && imageLink !== '') {
			setButtonState('button-active');
		} else {
			setButtonState('');
		}
	}

	const handleImageSuccess = (imageUrl) => {
		if (imageUrl !== '') {
			setImageLink(imageUrl);
			if (title !== '' && text !== '') {
				setButtonState('button-active');
			} else {
				setButtonState('');
			}
		} else {
			setImageLink('');
		}
	};

	function handleCreate() {
		if (title !== '' && text !== '' && imageLink !== '') {
			// Create a new post object with the provided title and text

			const date = new Date();
			const month = date.toLocaleString('default', { month: 'long' });
			const year = date.getFullYear();
			const day = date.getDate();
			const currentDate = `${month} ${day}, ${year}`;
			const newPost = {
				id: postsData.length + 1,
				title,
				text,
				date: currentDate,
				author: 'Guest',
				comments: [],
				likes: 0,
				isLiked: false,
				imageUrl: imageLink,
			};

			// Retrieve existing posts from localStorage or initialize an empty array
			const existingPosts = JSON.parse(localStorage.getItem('posts'));

			// Add the new post to the existing posts array
			existingPosts.push(newPost);

			// Store the updated posts array back into localStorage
			localStorage.setItem('posts', JSON.stringify(existingPosts));

			// Reset Form
			setText('');
			setTitle('');
			setImageLink('');
			setButtonState('');
		}
	}

	return (
		<div className="post-page">
			<NavLink id="Navigation" to={'/post'}>
				<FontAwesomeIcon icon={faArrowLeft} style={{ color: '#0266ff', marginRight: '10px' }} />
				Blog
			</NavLink>
			<div className="left-side-column">
				<h1 className="post-title">New Post</h1>
				<div className="add-post-container">
					<div className="title-container">
						<h2>Add Title*</h2>
						<textarea onKeyUp={handleButtonState} placeholder={'Our First Concert in the U.S.!'} className="title-textarea" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
					</div>
					<div className="text-container">
						<h2>Add Text*</h2>
						<textarea onKeyUp={handleButtonState} placeholder={"It's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got. See you soon! 🎉🇺🇸🎤"} className="text-textarea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
					</div>
					<button className={`post-button ${buttonState}`} onClick={handleCreate}>
						Post
					</button>
				</div>
			</div>
			<div className="right-side-column">
				<PostImage addImageSuccessful={handleImageSuccess} />
			</div>
		</div>
	);
}

export default Create;

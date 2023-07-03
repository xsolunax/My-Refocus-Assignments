import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function shorten(num) {
	return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
}

function PostPage({ posts }) {
	const { id } = useParams();
	const [post, setPost] = useState(() => {
		const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
		const storedPost = storedPosts.find((item) => item.id === parseInt(id));
		return storedPost;
	});
	const [like, setLike] = useState(() => {
		const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
		const storedPost = storedPosts.find((item) => item.id === parseInt(id));
		return storedPost ? storedPost.isLiked : post?.isLiked;
	});
	const [buttonState, setButtonState] = useState();
	const [text, setText] = useState('');
	const [comment, setComment] = useState(() => {
		const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
		const storedPost = storedPosts.find((item) => item.id === parseInt(id));
		const storedComments = storedPost.comments;
		return storedComments;
	});
	function handleLike() {
		setLike((prevLike) => !prevLike);
		if (post) {
			const updatedPost = { ...post, isLiked: !like };

			if (like) {
				updatedPost.likes -= 1;
			} else {
				updatedPost.likes += 1;
			}

			setPost(updatedPost);

			const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
			const postIndex = storedPosts.findIndex((p) => p.id === parseInt(id));
			if (postIndex !== -1) {
				storedPosts[postIndex] = updatedPost;
				localStorage.setItem('posts', JSON.stringify(storedPosts));
			}
		}
	}

	function handleButtonState() {
		setButtonState(text !== '' ? 'button-active' : '');
	}
	function handleSend() {
		const date = new Date();
		const month = date.toLocaleString('default', { month: 'long' });
		const year = date.getFullYear();
		const day = date.getDate();
		const currentDate = `${month} ${day}, ${year}`;

		if (text !== '') {
			const newPost = { text: `${text}`, author: 'Guest', date: currentDate, likes: 0, isLiked: false };

			setComment((prevComments) => [...prevComments, newPost]);
			setText('');
			setButtonState('');

			if (post) {
				const updatedComments = [...post.comments, newPost];
				const updatedPost = { ...post, comments: updatedComments };
				setPost(updatedPost);

				const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
				const postIndex = storedPosts.findIndex((item) => item.id === parseInt(id));

				if (postIndex !== -1) {
					storedPosts[postIndex] = updatedPost;
				}

				localStorage.setItem('posts', JSON.stringify(storedPosts));
			}
		}
	}

	return (
		<div className="post-page">
			<NavLink id="Navigation" to={'/post'}>
				<FontAwesomeIcon icon={faArrowLeft} style={{ color: '#0266ff', marginRight: '10px' }} />
				Blog
			</NavLink>
			<div className="left-side-column">
				<h1 className="post-title">{post?.title}</h1>
				<div className="post-author-date">
					<div className="post-author-icon"></div>
					<p className="author-name">{post?.author}</p>
					<p className="post-date author-date">{post?.date}</p>
				</div>
				<div className="post-description">
					<p>{post?.text}</p>
					<div className="post-reactions">
						<div className="post-message">
							<FontAwesomeIcon icon={faMessage} size="sm" />
							<p>{post?.comments.length}</p>
						</div>
						<div className="post-likes">
							<FontAwesomeIcon onClick={handleLike} className={like ? 'liked' : ''} icon={like ? fasHeart : farHeart} style={{ color: like ? '#0266ff !important' : '#9d9db5 !important' }} size="sm" />
							<p>{shorten(post.likes)}</p>
						</div>
					</div>
				</div>
				<div className="comment-section">
					<h2>Leave a comment</h2>
					<div className="comment-box">
						<textarea value={text} onKeyUp={handleButtonState} onChange={(e) => setText(e.target.value)}></textarea>
						<button id="comment-send" className={buttonState} onClick={handleSend}>
							Send
						</button>
					</div>
					<hr style={{ margin: '45px 0px', backgroundColor: '#EBEFF8' }}></hr>
					<div className="comments">
						<h2>Comments:</h2>
						<div>
							{comment.map((comments, i) => (
								<div key={i}>
									<div className="user-comment-box">
										<FontAwesomeIcon icon={faCircleUser} style={{ color: '#e0ffff', border: '1px solid #9d9db5', borderRadius: '100%' }} size="2xl" />
										<div className="user-comment">
											<p className="user-comment-name">{comments.author}</p>
											<p>{comments.text}</p>
											<div className="comment-reaction">
												<p>{comments.date}</p>
												<div className="post-likes">
													<FontAwesomeIcon className={comments.isLiked ? 'liked' : ''} icon={comments.isLiked ? fasHeart : farHeart} size="sm" />
													<p>{shorten(comments.likes)}</p>
												</div>
											</div>
										</div>
									</div>
									<hr style={{ margin: '20px 0px', backgroundColor: '#EBEFF8' }} key={`hr ${i}`}></hr>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="right-side-column">
				<img src={post.imageUrl ? post.imageUrl : `../assets/img/${post.id}.png`} alt={post.title} className="post-img" />
			</div>
		</div>
	);
}

export default PostPage;

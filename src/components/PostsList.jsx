import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage as farMessage } from '@fortawesome/free-regular-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

function shorten(num) {
	return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
}

export const PostsList = ({ posts }) => {
	const [activeTab, setActiveTab] = useState('Posts');
	const handleTab1 = () => {
		setActiveTab('Posts');
	};
	const handleTab2 = () => {
		setActiveTab('Favorites');
	};

	const storedPosts = localStorage.getItem('posts');
	if (!storedPosts) {
		if (posts.length !== 0) {
			localStorage.setItem('posts', JSON.stringify(posts));
		}
	}
	const parsedPosts = storedPosts ? JSON.parse(storedPosts) : [];

	const allPosts = [...parsedPosts];

	return (
		<>
			<nav className="post-navbar">
				<div className="navbar">
					<button className={activeTab === 'Posts' ? 'active' : ''} onClick={handleTab1}>
						All Posts
					</button>
					<button className={activeTab === 'Favorites' ? 'active' : ''} onClick={handleTab2}>
						Favorites
					</button>
				</div>
				<NavLink to="create" className="add-post">
					<FontAwesomeIcon icon={faPlus} size="sm" />
					<span>Add Post</span>
				</NavLink>
			</nav>
			<div key="posts" className={`posts-list ${activeTab === 'Posts' ? 'container-active' : 'container-hidden'}`}>
				{allPosts.map((post, i) => (
					<Link className="post-container" to={`${post.id}`} key={post.id}>
						<LazyLoadImage src={post.imageUrl ? post.imageUrl : `../assets/img/${post.id}.png`} alt={post.title} className="post-img" effect="blur" />
						<p className="post-title">{post.title}</p>
						<p className="post-description">{post.text}</p>
						<div className="post-info">
							<p className="post-date">{post.date}</p>
							<p className="post-author">{post.author}</p>
							<div className="post-reactions">
								<div className="post-message">
									<FontAwesomeIcon icon={farMessage} size="sm" />
									<p>{post.comments.length}</p>
								</div>
								<div className="post-likes">
									<FontAwesomeIcon style={{ color: post.isLiked ? '#0266ff' : '#9d9db5' }} className={post.isLiked ? 'liked' : ''} icon={post.isLiked ? fasHeart : farHeart} size="sm" />
									<p>{shorten(post.likes)}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
			<div key="favorites" className={`posts-list ${activeTab === 'Favorites' ? 'container-active' : 'container-hidden'}`}>
				{allPosts
					.filter((post) => post.isLiked === true)
					.map((post, i) => (
						<Link className="post-container" to={`${post.id}`} key={post.id}>
							<LazyLoadImage src={post.imageUrl ? post.imageUrl : `../assets/img/${post.id}.png`} alt={post.title} className="post-img" effect="blur" />
							<p className="post-title">{post.title}</p>
							<p className="post-description">{post.text}</p>
							<div className="post-info">
								<p className="post-date">{post.date}</p>
								<p className="post-author">{post.author}</p>
								<div className="post-reactions">
									<div className="post-message">
										<FontAwesomeIcon icon={farMessage} size="sm" />
										<p>{post.comments.length}</p>
									</div>
									<div className="post-likes">
										<FontAwesomeIcon className={post.isLiked ? 'liked' : ''} icon={post.isLiked ? fasHeart : farHeart} size="sm" />
										<p>{shorten(post.likes)}</p>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
		</>
	);
};

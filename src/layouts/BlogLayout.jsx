import { NavLink, Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function BlogLayout() {
	const [navbarState, setNavbarState] = useState('navbar-hidden');

	function handleNav() {
		if (navbarState === 'navbar-active') {
			setNavbarState('navbar-hidden');
		} else {
			setNavbarState('navbar-active');
		}
	}

	return (
		<div className="main-layout">
			<header>
				<nav className="main-navbar">
					<h1 className="logo">LOGO</h1>
					<button className="menu-button" onClick={handleNav}>
						<FontAwesomeIcon icon={faBars} size="lg" style={{ color: '#0266ff !important' }} />
					</button>
					<div className={`navbar ${navbarState}`}>
						<NavLink to="/post">Blog</NavLink>
						<Link to="">About Us</Link>
						<Link to="">Reviews</Link>
						<div className="account-nav">
							<Link to="">Sign Up</Link>
							<Link id="login-button" to="">
								Log In
							</Link>
						</div>
					</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default BlogLayout;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTwitter, faWhatsapp, faTiktok, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';
function Footer() {
	return (
		<div className="footer">
			<div className="left-side">
				<p>Follow Us</p>
				<div className="social-medias">
					<a href="#" className="social-media-icon" id="linkedin">
						<FontAwesomeIcon icon={faLinkedinIn} size="lg" fixedWidth />
					</a>
					<a href="#" className="social-media-icon" id="ig">
						<FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth />
					</a>
					<a href="#" className="social-media-icon" id="facebook">
						<FontAwesomeIcon icon={faFacebookF} size="lg" fixedWidth />
					</a>
					<a href="#" className="social-media-icon" id="twitter">
						<FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth />
					</a>
					<a href="#" className="social-media-icon" id="whatsapp">
						<FontAwesomeIcon icon={faWhatsapp} size="lg" fixedWidth />
					</a>
					<a href="#" className="social-media-icon" id="tiktok">
						<FontAwesomeIcon icon={faTiktok} size="lg" fixedWidth />
					</a>
					<a href="#" className="social-media-icon" id="youtube">
						<FontAwesomeIcon icon={faYoutube} size="lg" fixedWidth />
					</a>
				</div>
			</div>
			<div className="right-side">
				<a id="privacy-policy" href="#">
					Privacy Policy
				</a>
				<a href="#">Terms of Use</a>
			</div>
		</div>
	);
}

export default Footer;

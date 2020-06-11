import React from 'react';
import { IoIosHeart } from 'react-icons/io';
import '../../styles/Footer.css';

const Footer = () => {
	return (
		<div>
			{/* footer content */}
			<footer>
				<h3>
					Copyright &copy; 2020  | 
					Created with <IoIosHeart className="footerFont" /> by wm-has developers
				</h3>
			</footer>
			{/* /footer content */}
		</div>
	);
};

export default Footer;

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 MyCompany. All rights reserved.</p>
            <div className="social-links">
                <a href="https://facebook.com">Facebook</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://instagram.com">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;

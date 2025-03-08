import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="/path-to-your-logo.png" alt="Logo" />
            </div>
            <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>Email: contact@littlelemon.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div className="footer-social-media">
                <h4>Follow Us</h4>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="footer-doormat-nav">
                <h4>Quick Links</h4>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/reservation">Reservations</a>
                <a href="/orderonline">Order Online</a>
                <a href="/login">Login</a>
            </div>
        </footer>
    );
};

export default Footer;
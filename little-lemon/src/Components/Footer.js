import React from 'react';
// Assuming the logo is in src/assets; adjust path as needed
import footerLogo from './FooterLogo.png'; // Import if in src, else use public path

const Footer = () => {
  // Structured doormat navigation data (adjust to match Figma)
  const doormatNav = [
    { title: 'Navigation', links: [
      { name: 'About', href: '/about' },
      { name: 'Menu', href: '/menu' },
      { name: 'Reservations', href: '/reservation' },
      { name: 'Order Online', href: '/orderonline' },
      { name: 'Login', href: '/login' },
    ]},
  ];

  const socialMedia = [
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={footerLogo} alt="Little Lemon Logo" className="h-12" />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-doormat-nav md:col-span-2">
          <nav>
            {doormatNav.map((section, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-gray-400 hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <address className="not-italic text-gray-400">
            <p>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
            <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
          </address>
        </div>

        {/* Social Media Section */}
        <div className="footer-social-media">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-2">
            {socialMedia.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
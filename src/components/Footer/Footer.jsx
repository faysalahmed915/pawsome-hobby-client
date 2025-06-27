import React from 'react';
import { Link } from 'react-router';
import Logo from '../Shared/logo';

const Footer = () => {
  return (
    <footer 
    // className='card-container'
    // className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo and Description */}
        <div className="space-y-2">
          <div className='w-16'>
            <Logo></Logo>
          </div>
          <p className="text-sm max-w-xs">
            Bringing passionate people together through hobby groups. Create, join, and thrive in your community.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to='/' className="hover:text-green-600 transition">Home</Link></li>
              <li><Link to='/groups' className="hover:text-green-600 transition">All Groups</Link></li>
              <li><Link to='/createGroup' className="hover:text-green-600 transition">Create Group</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to='/faq' className="hover:text-green-600 transition">FAQ</Link></li>
              <li><Link to='/contactUs' className="hover:text-green-600 transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact Info</h3>
          <p className="text-sm">hello@pawsomehobby.com</p>
          <p className="text-sm">+123 456 7890</p>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Pawsome Hobby. All rights reserved.
      </div>
    </footer>

  );
};

export default Footer;
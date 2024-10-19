import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white mt-28">
            <div className="text-sm">
                &copy; {new Date().getFullYear()} Parthip
            </div>
            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 hover:text-blue-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 hover:text-blue-400" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 hover:text-pink-500" />
                </a>
            </div>
        </div>
    );
}

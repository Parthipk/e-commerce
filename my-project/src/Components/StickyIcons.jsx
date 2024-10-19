import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function StickyIcons() {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50"> <a
                href="https://wa.me/9895690176"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-white" />
            </a> <a
                href="https://www.instagram.com/parthipkanish/profilecard/?igsh=b2V1N3Zhdngydncz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
            >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-white" />
            </a>
        </div>
    );
}

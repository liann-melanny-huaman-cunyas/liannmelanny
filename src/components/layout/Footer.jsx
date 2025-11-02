import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDev } from 'react-icons/fa';

const Footer = ({isDark}) => {
        const linkStyle = isDark
        ? 'text-white hover:text-pink-400'
        : 'text-gray-800 hover:text-green-600';

    return (
        <footer className="flex flex-1/2 items-center justify-between  px-4 -mt-5 text-sm">
        <p className={`mx-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>@2025 liann.tech</p>
        <section className="flex gap-4 mx-12 mb-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"  className={`${linkStyle}`} >
            <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"  className={`${linkStyle}`}>
            <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  className={`${linkStyle}`}>
            <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"  className={`${linkStyle}`}>
            <FaInstagram size={24} />
            </a>
            <a href="https://dev.to" target="_blank" rel="noopener noreferrer"  className={`${linkStyle}`}>
            <FaDev size={24} />
            </a>
        </section>
        </footer>
    );
};

export default Footer;

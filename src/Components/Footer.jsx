import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import image from '../assets/Logo.png';
import { motion } from "framer-motion"
import './Footer.css';

const Footer = () => {
    return (
        <motion.footer
            className="footer-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="footer-logo">
                <img src={image} alt="MAHIR Logo" /><br />
                <span className="brand-name">MAHIR SOFT SOLUTIONS</span>
            </div>

            <div className="footer-links">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

            </div>

            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} MAHIR SOFT SOLUTIONS. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;
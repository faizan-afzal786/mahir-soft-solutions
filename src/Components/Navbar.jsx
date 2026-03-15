import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import image from "../assets/Logo.png"
import "./Navbar.css"

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    return (

        <nav className="nav-container">

            <div className="name-container">
                <NavLink to="/">
                    <img src={image} alt="logo" height={50} />
                </NavLink>
                <span className="first-name">MAHIR</span>
                <span className="full-name">SOFT SOLUTIONS</span>
            </div>

            <div className="mobile-menu" onClick={() => setMenu(!menu)}>
                <FaBars size={25} />
            </div>

            <ul className={`nav-links ${menu ? "show" : ""}`}>

                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/courses">Courses</NavLink>
                </li>

                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>

                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>

                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>

            </ul>

        </nav>

    )
}

export default Navbar
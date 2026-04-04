import React from 'react'
import './Projects.css'
import { NavLink } from 'react-router-dom'
import Front from '../assets/weatherapp.png';
import Commerce from '../assets/e-commerce.jpg'
import Design from '../assets/ui-ux.jpg'
import CostomSoftware from '../assets/C-SOFT.jpg'

const Projects = () => {
    const projects = [
        {
            name: "MAHIR WEATHER APP",
            image: Front,
            desc: "This is a weather project...",
            link: "/projects/weather-app" // <-- ye aapka route hai App.jsx me
        },
        {
            name: "E-Commerce",
            image: Commerce,
            desc: "Custom online stores...",
            link: "/projects/ecommerce"
        },
        {
            name: "UI/UX Design",
            image: Design,
            desc: "Intuitive interfaces...",
            link: "/projects/uiux"
        },
        {
            name: "Custom Software",
            image: CostomSoftware,
            desc: "Tailored software...",
            link: "/projects/software"
        },
    ];

    return (
        <section className="projects-section">
            <h2>Our Projects</h2>
            <p>Delivering innovative solutions for diverse industries</p>
            <div className="projects-grid">
                {projects.map((proj, index) => (
                    // ✅ Card wrapped in NavLink to enable routing
                    <NavLink
                        key={index}
                        to={proj.link}
                        className="project-card"
                    >
                        <img src={proj.image} alt={proj.name} />
                        <div className="overlay">
                            <h3>{proj.name}</h3>
                            <p>{proj.desc}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
            <button className="view-all">View All Projects</button>
        </section>
    );
};

export default Projects
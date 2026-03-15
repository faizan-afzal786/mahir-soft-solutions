import React from 'react'
import './Projects.css'
import Logo from '../assets/Logo.png'
import Front from '../assets/Front.jpg';
import Commerce from '../assets/e-commerce.jpg'
import Design from '../assets/ui-ux.jpg'
import CostomSoftware from '../assets/C-SOFT.jpg'

const Projects = () => {
    const projects = [
        {
            name: "Web Development",
            image: Front,
            desc: "Responsive websites for modern businesses",
        },
        {
            name: "E-Commerce",
            image: Commerce,
            desc: "Custom online stores with secure payments",
        },
        {
            name: "UI/UX Design",
            image: Design,
            desc: "Intuitive interfaces & designs",
        },
        {
            name: "Custom Software",
            image: CostomSoftware,
            desc: "Tailored software solutions for enterprises",
        },
    ];

    return (
        <section className="projects-section">
            <h2>Our Projects</h2>
            <p>Delivering innovative solutions for diverse industries</p>
            <div className="projects-grid">
                {projects.map((proj, index) => (
                    <div key={index} className="project-card">
                        <img src={proj.image} alt={proj.name} />
                        <div className="overlay">
                            <h3>{proj.name}</h3>
                            <p>{proj.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-all">View All Projects</button>
        </section>
    );
};


export default Projects

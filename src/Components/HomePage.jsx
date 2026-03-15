import React from 'react'
import Logo from '../assets/Logo.png'
import MainePageCard from './MainePageCard'
import { motion } from "framer-motion"
import './HomePage.css'


const HomePage = () => {
    return (
        <div style={{ marginTop: "-40px" }}>
            <div className="px-4 pt-5 my-5 text-center border-bottom" style={{ background: " rgb(223, 213, 213)" }}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="display-4 fw-bold text-body-emphasis"
                >
                    MAHIR SOFT SOLUTIONS
                </motion.h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4" style={{ textAlign: "justify" }}>Mahir Soft Solutions is a modern software company delivering high-quality web development and digital solutions. We specialize in responsive websites, e-commerce platforms, and custom software development using the latest technologies. Our mission is to transform ideas into powerful digital experiences that drive business growth.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Learn More</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" style={{ border: "2px solid white" }}>Enroll Now</button>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="container px-5">
                        <img src={Logo} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="300" height="200" />
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <MainePageCard />
                {/* <MainePageCard />
                <MainePageCard />
                <MainePageCard /> */}
            </div>
        </div>
    )
}

export default HomePage

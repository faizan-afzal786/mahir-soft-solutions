import React from 'react'
import './Services.css'
import bgimage from '../assets/servicesbg.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Magic from '../assets/magic.svg'

const Services = () => {
    return (
        <div>
            <div className="s-main-heading">
                <div className='blur-box'>
                    <h1>Services at Mahir Soft Solutions</h1>
                    <p>We provide innovative and result-driven digital solutions designed to help businesses grow, compete, and succeed in today’s fast-moving digital world. We provide innovative and result-driven digital solutions designed to help businesses grow, compete, and succeed in today’s fast-moving digital world. We provide innovative and result-driven digital solutions designed to help businesses grow, compete, and succeed in today’s fast-moving digital world. We provide innovative and result-driven digital solutions designed to help businesses grow, compete, and succeed in today’s fast-moving digital world.</p>

                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <div className="s-start">
                <div className='start1'>
                    <h1>MAHIR, <span>SOFTWARE DEVELOPMENT SERVICES</span></h1>
                </div>
                <div className='start2'>
                    <p>We help enterprises overcome key business challenges and unlock growth opportunities with custom software tailored to unique operational, governance, and scalability needs. Our AI-first mindset, strategy-led modernization, and end-to-end engineering capabilities allow us to support enterprises at various levels of infrastructure and AI maturity. With over two decades of experience across regulated and complex environments, we deliver software development services that balance stability, resilience, and innovation at enterprise scale.</p>
                </div>
            </div>

            {/* Custom Software Development Services */}

            <div className="s-d-services">
                <div className="card-row">
                    <div className="s-card1">
                        <i className="bi bi-magic" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Custom Software Development</h4>
                        <p>Deliver long-term value by tailoring software solutions to enterprise needs, goals, processes, and digital infrastructure. Thus, reducing operational friction, enabling scalability, and supporting long-term adaptability. </p>
                    </div>

                    <div className="s-card1">
                        <i className="bi bi-laptop" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Web Application Development</h4>
                        <p>Build secure, reliable, and scalable web applications that drive growth by improving engagement. The performance-optimized designs allow these apps to handle complex workflows and high traffic.</p>
                    </div>

                    <div className="s-card1">
                        <i className="bi bi-phone" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Mobile Apps</h4>
                        <p>Engaging, secure, and high-performance mobile applications expand operations and reach to a wider range of devices. Both our native and cross-platform app architectures support long-term stability and modernization of enterprise mobile apps. </p>
                    </div>
                </div>


                <div className="card-row">
                    <div className="s-card1">
                        <i className="bi bi-magic" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Enterprise Software Development</h4>
                        <p>Deliver long-term value by tailoring software solutions to enterprise needs, goals, processes, and digital infrastructure. Thus, reducing operational friction, enabling scalability, and supporting long-term adaptability. </p>
                    </div>

                    <div className="s-card1">
                        <i className="bi bi-laptop" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Cloud Application Development</h4>
                        <p>Build secure, reliable, and scalable web applications that drive growth by improving engagement. The performance-optimized designs allow these apps to handle complex workflows and high traffic.</p>
                    </div>

                    <div className="s-card1">
                        <i className="bi bi-phone" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>AI Software Development</h4>
                        <p>Engaging, secure, and high-performance mobile applications expand operations and reach to a wider range of devices. Both our native and cross-platform app architectures support long-term stability and modernization of enterprise mobile apps. </p>
                    </div>
                </div>


                <div className="card-row">
                    <div className="s-card1">
                        <i className="bi bi-magic" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Data Engineering and Analytics Development</h4>
                        <p>Deliver long-term value by tailoring software solutions to enterprise needs, goals, processes, and digital infrastructure. Thus, reducing operational friction, enabling scalability, and supporting long-term adaptability. </p>
                    </div>

                    <div className="s-card1">
                        <i className="bi bi-laptop" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Integration & API Development</h4>
                        <p>Build secure, reliable, and scalable web applications that drive growth by improving engagement. The performance-optimized designs allow these apps to handle complex workflows and high traffic.</p>
                    </div>

                    <div className="s-card1">
                        <i className="bi bi-phone" style={{ fontSize: '2rem', color: '#ff7a00' }}></i>
                        <h4>Support & Maintenance</h4>
                        <p>Engaging, secure, and high-performance mobile applications expand operations and reach to a wider range of devices. Both our native and cross-platform app architectures support long-term stability and modernization of enterprise mobile apps. </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services

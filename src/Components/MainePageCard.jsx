import React from 'react'
import Front from '../assets/Front.jpg'
import Back from '../assets/Back.jpg'
import Mobile from '../assets/Mobile.jpg'
import PHP from '../assets/PHP.jpg'
import { motion } from "framer-motion"
import './MainePageCard.css'

const MainePageCard = () => {
    return (
        <div className="cards-wrapper">
            <motion.div
                className="card main-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <img src={Front} className="card-img-top" alt="..." height={200} />
                <div className="card-body">
                    <h5 className="card-title">Front-End Development</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </motion.div>

            <motion.div
                className="card main-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <img src={Back} className="card-img-top" alt="..." height={200} />
                <div className="card-body">
                    <h5 className="card-title">Back-End Development</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </motion.div>

            <motion.div
                className="card main-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <img src={Mobile} className="card-img-top" alt="..." height={200} />
                <div className="card-body">
                    <h5 className="card-title">Mobile App Development</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </motion.div>

            <motion.div
                className="card main-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <img src={PHP} className="card-img-top" alt="..." height={200} />
                <div className="card-body">
                    <h5 className="card-title">PHP Development</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </motion.div>
        </div>
    )
}

export default MainePageCard
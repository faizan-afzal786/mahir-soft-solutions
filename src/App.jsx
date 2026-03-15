import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import HomePage from "./Components/HomePage"
import Footer from "./Components/Footer"
import Courses from "./Components/Courses"
import Contact from "./Components/Contact"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App

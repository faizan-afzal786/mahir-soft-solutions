import React, { useState } from 'react';
import './Courses.css';
import Front from '../assets/Front.jpg';
import Back from '../assets/Back.jpg';
import Mobile from '../assets/Mobile.jpg';
import PHP from '../assets/PHP.jpg';
import { NavLink } from 'react-router-dom';

const Courses = () => {
    const [searchTitle, setSearchaTitle] = useState("");

    const coursesArray = [
        {
            title: "Front-End Development",
            description: "Learn HTML, CSS, JavaScript, and React to build interactive websites.",
            img: Front,
            link: "#"
        },
        {
            title: "Back-End Development",
            description: "Learn Node.js, Express, databases, and server-side programming.",
            img: Back,
            link: "#"
        },
        {
            title: "Mobile App Development",
            description: "Create Android and iOS apps with React Native and Flutter.",
            img: Mobile,
            link: "#"
        },
        {
            title: "PHP Development",
            description: "Master PHP and MySQL to build dynamic websites and apps.",
            img: PHP,
            link: "#"
        },
        {
            title: "Front-End Development",
            description: "Learn HTML, CSS, JavaScript, and React to build interactive websites.",
            img: Front,
            link: "#"
        },
        {
            title: "Back-End Development",
            description: "Learn Node.js, Express, databases, and server-side programming.",
            img: Back,
            link: "#"
        },
        {
            title: "Mobile App Development",
            description: "Create Android and iOS apps with React Native and Flutter.",
            img: Mobile,
            link: "#"
        },
        {
            title: "PHP Development",
            description: "Master PHP and MySQL to build dynamic websites and apps.",
            img: PHP,
            link: "#"
        },
        {
            title: "Front-End Development",
            description: "Learn HTML, CSS, JavaScript, and React to build interactive websites.",
            img: Front,
            link: "#"
        },
        {
            title: "Back-End Development",
            description: "Learn Node.js, Express, databases, and server-side programming.",
            img: Back,
            link: "#"
        },
        {
            title: "Mobile App Development",
            description: "Create Android and iOS apps with React Native and Flutter.",
            img: Mobile,
            link: "#"
        },
        {
            title: "PHP Development",
            description: "Master PHP and MySQL to build dynamic websites and apps.",
            img: PHP,
            link: "#"
        },
    ];

    const filteredCourses = coursesArray.filter(course =>
        course.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    return (
        <div>
            <div className="search-bar">
                <input
                    type="search"
                    placeholder="Search courses..."
                    value={searchTitle}
                    onChange={(e) => setSearchaTitle(e.target.value)}
                />
            </div>

            <div className='courses-heading'>
                <h1>Courses</h1>
            </div>
            <hr style={{ margin: "10px 25px" }} />

            <div className="courses-container">
                {filteredCourses.length > 0 ? (filteredCourses.map((course, index) => (

                    <div className="card" key={index}>

                        <img src={course.img} className="card-img-top" alt={course.title} height={200} />

                        <div className="card-body">

                            <h5 className="card-title">{course.title}</h5>
                            <p className="card-text">{course.description}</p>
                            <a href={course.link} className="btn btn-primary">Learn More</a>

                        </div>

                    </div>
                ))
                ) : (
                    <p style={{ marginLeft: "25px" }}>No courses found.</p>
                )}

            </div>
        </div>
    );
}

export default Courses;










































































































// import React, { useState } from 'react'
// import './Courses.css'
// import Image from '../assets/Logo.png'
// import Front from '../assets/Front.jpg'
// import Back from '../assets/Back.jpg'
// import Mobile from '../assets/Mobile.jpg'
// import PHP from '../assets/PHP.jpg'
// import { NavLink } from 'react-router-dom'


// const Courses = () => {

//     const [searchTitle, setSearchaTitle] = useState("");

//     const searchDataArray = [

//     ]

//     return (
//         <div>

//             <div className="search-bar">
//                 <input type="search"
//                     value={searchTitle}
//                     onChange={(input) => setSearchaTitle(input.target.value)} />
//             </div>

//             <div className='courses-heading'>
//                 <h1>Technical Courses</h1>
//                 <NavLink to="/technical-courses"> <span>Learn More</span> </NavLink>
//             </div>
//             <hr style={{ marginLeft: "25px", marginRight: "25px", marginTop: "-10px" }} />

//             <div style={{ display: "flex" }}>


//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Front} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Front-End Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Back} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Back-End Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Mobile} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Mobile App Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={PHP} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">PHP Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//             </div >


//             <br />
//             <hr />

//             <div className='courses-heading'>
//                 <h1>Non-Technical Courses</h1>
//                 <NavLink to="non-technical-courses"> <span>Learn More</span> </NavLink>
//             </div>
//             <hr style={{ marginLeft: "25px", marginRight: "25px", marginTop: "-10px" }} />

//             <div style={{ display: "flex" }}>
//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Front} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Front-End Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Back} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Back-End Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Mobile} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Mobile App Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={PHP} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">PHP Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//             </div >


//             <br />
//             <hr />

//             <div className='courses-heading'>
//                 <h1>Technical Courses</h1>
//                 <NavLink to="other-courses"> <span>Learn More</span> </NavLink>
//             </div>
//             <hr style={{ marginLeft: "25px", marginRight: "25px", marginTop: "-10px" }} />

//             <div style={{ display: "flex" }}>
//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Front} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Front-End Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Back} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Back-End Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={Mobile} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">Mobile App Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div className="card" style={{ width: "18rem", marginLeft: "21px" }}>
//                     <img src={PHP} className="card-img-top" alt="..." height={200} />
//                     <div className="card-body">
//                         <h5 className="card-title">PHP Development</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                         <a href="#" className="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//             </div >


//             <br />


//         </div>
//     )
// }

// export default Courses

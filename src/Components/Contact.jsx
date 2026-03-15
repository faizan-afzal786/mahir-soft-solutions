import React from 'react'
import './Contact.css'
import Logo from '../assets/Logo.png'

const Contact = () => {
    return (
        <div>

            <div className='main-container-contact'>

                <div className='c-heading'>
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Whether you have a project idea, a business inquiry, or just want to say hello, feel free to reach out. Our team is always ready to assist you.</p>

                    <p>You can also contact us at <b>Mahir Soft Solutions</b> Official Website Link: <br />
                        <a href="https://www.mahir.com.pk" target='_blank'> @mahirsoftsolution</a>
                    </p>


                    <p>If you want to meet us Physically so our address is: <br /> <b>Near Abdullah Medical Complex Steel Bagh Circular Mor Kasur, Pakistan</b> </p>


                    <img src={Logo} alt="" width={250} />
                </div>

                <div>
                    <form style={{
                        width: "400px", border: "1px solid", padding: "20px", borderRadius: "10px"
                    }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                            <input type="email" className="form-control" id="phone" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Subject</label>
                            <input type="password" className="form-control" id="subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                            <textarea type="password" className="form-control" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ color: "orange", background: "#0a0a5e", fontWeight: "bolder" }}>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact

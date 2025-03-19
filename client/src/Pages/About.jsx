import React from 'react';

const About = () => {
    return (
        <>
            <div id="about">
                <section className="container-fluid d-flex align-items-center justify-content-center text-center min-vh-100 text-white">
                    <div className="container py-5">
                        <h1 className="text-warning fw-bold mb-4">
                            <u>About Me</u>
                        </h1>
                        <div className="row align-items-center">
                            <div className="col-lg-5 d-flex justify-content-center mb-4 mb-lg-0">
                                <img
                                    src="/about.jpg"
                                    alt="Profile"
                                    className="img-fluid rounded shadow-lg "
                                    style={{ maxWidth: "80%" }}
                                />
                            </div>

                            <div className="col-lg-7 text-lg-start">
                                <h2 className="display-5 fw-bold">My Profile</h2>
                                <p className="lead mt-3">
                                    Hi, I'm <span className="text-warning fw-bold">Sagar Raj</span>, a
                                    <span className="fw-bold"> MERN Stack Developer</span> passionate about
                                    building high-performance and scalable web applications. I specialize in
                                    <span className="text-warning fw-bold"> React.js, Node.js, Express.js, and MongoDB</span>.
                                </p>
                                <p>
                                    With a keen interest in problem-solving and optimized coding, I strive
                                    to create seamless user experiences and innovative solutions for
                                    modern web applications.
                                </p>
                                <a href="https://drive.google.com/file/d/1hKlgDFMPg82CqCOYXaL6bc6vWgpINd8t/view?usp=drive_link" target="_blank" className="btn btn-warning btn-lg mt-3">
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;

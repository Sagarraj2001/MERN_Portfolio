import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function HeroSection() {
    return (
        <>
            <div id="home">
                <section className="container-fluid d-flex align-items-center justify-content-center text-center min-vh-100  text-white mt-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
                            <p className="lead">I am a MERN Stack Developer passionate about building web applications.</p>
                            <a href="#about" className="btn btn-warning btn-lg mt-3 py-2 w-auto">About me</a>

                            <div className="mt-4 d-flex justify-content-center gap-3">
                                <a href="https://github.com/Sagarraj2001" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/sagar-raj-030697234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                                    <FaLinkedin />
                                </a>
                                <a href="#home" rel="noopener noreferrer" className="text-white fs-3">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img
                                src="/home.jpg"
                                alt="Profile"
                                className="img-fluid rounded-circle shadow-lg"
                                style={{ maxWidth: "80%" }}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default HeroSection;

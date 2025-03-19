import React from 'react';

const Education = () => {
    return (
        <div id="education">
            <section className="container-fluid d-flex align-items-center justify-content-center text-center min-vh-100  text-white">
                <div className="container py-5">
                    <h1 className="text-warning fw-bold mb-4">
                        <u>My Education</u>
                    </h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://lh3.googleusercontent.com/places/AAcXr8qVtrvCQbFUraYuyCUlSKk7LT67_jCfbwQDIObOZhy05qRokMnGnFH0x9uZRicIq-ewKU9JMedFKa9iVOx_P3Z6Li1isbK4Hck=s1600-w3264" className="card-img-top" alt="Education" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Matriculation</h5>
                                    <p className="card-text">Adarsh High School</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.admissioncare.co.in/Admin_Pannel/listing-images/cb29a5a3c5d71ad5ced9823087606b7d.slide1%20(1).jpg" className="card-img-top" alt="Education" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Intermediate</h5>
                                    <p className="card-text">Sita Ram Sahu College</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://dsuniversity.edu.in/slider/DSU-image-01.jpg" className="card-img-top" alt="Education" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">B.Tech in Information Technology</h5>
                                    <p className="card-text">DSEC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
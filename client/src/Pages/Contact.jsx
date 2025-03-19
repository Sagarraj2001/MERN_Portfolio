import React, { useState } from 'react'
import axios from "axios";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    axios.defaults.withCredentials = true;

    const handleClear = () => {
        setEmail("");
        setMessage("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/contact", { email, message })
            .then(result => {
                if (result.data.message === "success") {
                    alert("Thanks for contacting us, we will connect soon.");
                    handleClear();
                }
            })
            .catch(err => {
                alert("Please try again later.");
                console.error(err);
            });
    };

    return (
        <>
            <div id="contact">
                <section className="container-fluid d-flex text-white">
                    <div className="container py-3">
                        <h1 className="text-warning fw-bold mb-4 text-center">
                            <u>Contact Me</u>
                        </h1>
                        <div className="row align-items-center">
                            <div className="col-lg-7 d-flex justify-content-center mb-4 mb-lg-0">
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/a-woman-using-laptop-and-making-video-call-at-home-illustration-download-in-svg-png-gif-file-formats--work-from-online-consultation-virtual-meeting-working-on-pack-people-illustrations-4856828.png?f=webp" alt="Contact" className="img-fluid" style={{ maxWidth: "80%" }} />
                            </div>
                            <div className="col-lg-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-bold">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label fw-bold">Message</label>
                                        <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..." required value={message} onChange={e => setMessage(e.target.value)} ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-warning btn-lg">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Contact

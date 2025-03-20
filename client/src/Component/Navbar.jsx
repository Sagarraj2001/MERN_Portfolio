import React from "react";

function Navbar() {
    const handleNavCollapse = () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");
        
        if (navbarToggler && navbarCollapse.classList.contains("show")) {
            navbarToggler.click(); 
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={handleNavCollapse}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={handleNavCollapse}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education" onClick={handleNavCollapse}>Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill" onClick={handleNavCollapse}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project" onClick={handleNavCollapse}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={handleNavCollapse}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

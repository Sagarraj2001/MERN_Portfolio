import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projects from '../assets/Project.json'; 

const Project = () => {
  return (
    <>
      <div id="project">
        <section className="container-fluid d-flex align-items-center justify-content-center text-center min-vh-100 text-white">
          <div className="container py-5">
            <h1 className="text-warning fw-bold mb-4">
              <u>My Projects</u>
            </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {projects.map((project, index) => (
                <div className="col" key={index}>
                  <div className="card h-100 shadow bg-light text-dark">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="card-title fw-bold">{project.name}</h5>
                      <div className="mt-3 d-flex gap-3">
                        <a 
                          href={project.view} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-primary d-flex align-items-center gap-2"
                        >
                          <FaExternalLinkAlt /> Open Project
                        </a>
                        <a 
                          href={project.code} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-dark d-flex align-items-center gap-2"
                        >
                          <FaGithub /> Show Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;

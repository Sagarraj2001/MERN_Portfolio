import React from 'react';
import skills from '../Assets/Skill.json'; 

const Skills = () => {
  return (
    <>
      <div id="skill">
        <section className="container-fluid d-flex align-items-center justify-content-center text-center min-vh-100 text-white">
          <div className="container py-5">
            <h1 className="text-warning fw-bold mb-4">
              <u>My Skills</u>
            </h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {skills.map((skill, index) => (
                <div className="col" key={index}>
                  <div className="card h-100 shadow">
                    <img
                      src={skill.image} 
                      className="card-img-top"
                      alt={skill.name}
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{skill.name}</h5>
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

export default Skills;

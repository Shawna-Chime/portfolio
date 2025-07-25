import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projectsList } from "../data/data";

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);

  const navigate = useNavigate();
  return (
    <div className="projects">
      <Navbar />
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i class="ri-arrow-go-back-line"></i> Back
      </button>
      <div className="projects-wrapper">
        <h2>PROJECTS</h2>
        <div className="card-holder">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

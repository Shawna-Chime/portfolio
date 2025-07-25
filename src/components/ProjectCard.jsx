import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/Projects/${project.id}`}>
      <div className="proj-card">
        <div className="proj-card-img">
          <img src={project.img} alt="website" />
        </div>
        <h3>{project.name}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;

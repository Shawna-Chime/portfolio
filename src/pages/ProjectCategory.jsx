import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsList } from "../data/data";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";

const ProjectCategory = () => {
  let { id } = useParams();
  const [projects, setProjects] = useState(projectsList);

  let project = projects.find((project) => project.id == id);

  const navigate = useNavigate();
  return (
    <div className="category">
      <Navbar />
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i class="ri-arrow-go-back-line"></i> Back
      </button>
      <div className="proj-category">
        <h2>{project.name}</h2>
        <div>
          <div className="item-holder">
            {project.items.map((item) => (
              <ItemCard key={item.id} item={item} categoryId={project.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsList } from "../data/data";
import Navbar from "../components/Navbar";

const ItemDetail = () => {
  const { categoryId, itemId } = useParams();

  const category = projectsList.find((cat) => cat.id === categoryId);
  const item = category?.items.find((itm) => itm.id.toString() === itemId);

  if (!item) return <p>Item not found</p>;

const navigate = useNavigate();

  return (
    <div className="item-det-wrapper">
      <Navbar />
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i class="ri-arrow-go-back-line"></i> Back
      </button>
      <div className="item-detail">
        <h2>{item.title}</h2>
        <div className="item-det-info">
          <div className="item-det-img">
            <img src={item.image} alt={item.title} style={{ width: "300px" }} />
          </div>
          <div className="item-det-desc">
            <p>{item.desc}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            )}
            <p>{item.source}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

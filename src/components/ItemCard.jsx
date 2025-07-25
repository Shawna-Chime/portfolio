import React from "react";
import { Link, useParams } from "react-router-dom";

const ItemCard = ({ item, categoryId }) => {
  const imgStyle = {
    width: item.width || "100%",
    height: item.height || "auto",
    objectFit: "cover",
  };

  return (
    <Link to={`/Projects/${categoryId}/${item.id}`} className="item-link">
      <div className="item-card">
        <div className="item-img">
          <img src={item.image} alt={item.title} style={imgStyle} />
        </div>
        <h3>{item.title}</h3>
      </div>
    </Link>
  );
};

export default ItemCard;

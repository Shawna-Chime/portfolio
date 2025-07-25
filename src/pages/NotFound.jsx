import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="glitch-text">404</h1>
          <h2>Oops! Page not found</h2>
          <p>The page you're looking for doesn't seem to exist.</p>
          <Link to="/" className="home-btn">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

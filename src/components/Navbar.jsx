import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav-links">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/About"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/Projects"}>PROJECTS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

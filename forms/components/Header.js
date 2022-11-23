import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/book">Book</Link>
        </li>

        <li>
          <Link to="/chapter">Chapter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

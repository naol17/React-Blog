import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>My Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">Create Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
